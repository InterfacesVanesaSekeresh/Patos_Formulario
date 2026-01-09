import { useState, useEffect } from "react";
import FormPC from "./FormPC";
import ducklyn from "../data/ducklyn";
import FormPhone from "./FormPhone";


/**
 * Form Component
 * 
 * A responsive form component for adding duck products with validation.
 * Adapts between desktop (single-step) and mobile (two-step) layouts based on window width.
 * 
 * @component
 * @returns {JSX.Element} A section containing a responsive form for duck data entry
 * 
 * @example
 * return <Form />
 * 
 * Features:
 * - Responsive design using custom useWindowWidth hook
 * - Real-time form validation with error clearing on field changes
 * - Two-step form process for mobile devices (< 768px width)
 * - Single-step form process for desktop devices
 * - Automatic focus management for first validation error
 * - Prevents duplicate categories in select dropdown
 * 
 * State Management:
 * - duckData: Object containing form field values (nombre, precio, categoria, imagen, detalles, descripcion)
 * - duckErrors: Object containing validation error messages for each field
 * - siguiente: Current step in mobile form (1 or 2)
 * - submitted: Boolean flag to trigger focus management on validation errors
 * 
 * Helper Functions:
 * - useWindowWidth(): Custom hook that returns current window width and updates on resize
 * - validateDuck(data): Validates complete form data and returns error object
 * - validarPaso1(): Validates first step of mobile form (nombre, precio, categoria)
 * - handleDuckChange(e): Updates form data and clears field-specific errors
 * - handleDuckSubmit(e): Handles form submission with full validation
 * - handlePaso1(): Handles mobile form first step validation and progression
 * 
 * Validation Rules:
 * - nombre: Required and must not be empty
 * - descripcion: Required, minimum 20 characters
 * - precio: Required, must be a valid number
 * - categoria: Required and must not be empty
 * - imagen: Required, must start with "http"
 * - detalles: Required, minimum 5 characters
 */

const ducksObj = {
  nombre: "",
  precio: "",
  categoria: "",
  imagen: "",
  detalles: "",
  descripcion: "",
};

//Para saber el ancho de la pantalla
function useWindowWidth() {
  //Ancho actual de la pantalla
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    //Se ejecuta cuando la pantalla cambia de tamaño
    const handleResize = () => setWidth(window.innerWidth);

    //Se llama handleResize cuando la ventana cambia de tamaño
    window.addEventListener("resize", handleResize);

    //Para limpiar el componente una vez que no exista (se cambie a otra pág)
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  //Devuelve el ancho actual
  return width;
}

const validateDuck = (data) => {
  const errors = {};

  if (!data.nombre.trim()) {
    errors.nombre = "El nombre es obligatorio.";
  }
  if (!data.descripcion.trim() || data.descripcion.length < 20) {
    errors.descripcion =
      "La descripción es obligatoria y debe tener un mín de 20 carácteres.";
  }
  if (!data.precio.trim()) {
    errors.precio = "El precio es obligatorio.";
  } else if (isNaN(Number(data.precio))) {
    errors.precio = "El precio debe ser un número válido (Ej: 5.99).";
  }

  if (!data.categoria.trim()) {
    errors.categoria = "La categoría es obligatoria.";
  }
  if (!data.imagen.startsWith("http")) {
    errors.imagen = "La URL de la imagen es obligatoria y debe ser válida.";
  }
  if (!data.detalles.trim() || data.detalles.length < 5) {
    errors.detalles =
      "Los detalles son obligatorios y deben haber mín 5 carácteres.";
  }
  return errors;
};

function Form() {
  const [duckData, setDuckData] = useState(ducksObj);
  const [duckErrors, setDuckErrors] = useState({});
  const [siguiente, setSiguiente] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  //Ancho de la pantalla
  const windowWidth = useWindowWidth();

  //Paso 1 del formulario móvil
  const handlePaso1 = () => {
    //Pilla los errores
    const errores = validarPaso1(duckData);
    setDuckErrors(errores);
    //Se activa para que el useEffect enfoque el error
    setSubmitted(true);

    //Solo avanza si no hay errores
    if (Object.keys(errores).length === 0) {
      setSiguiente(2);
    }
  };

  //Es de móvil, se saca aqui porque el handlePaso1 lo usa
  const validarPaso1 = () => {
    const errores = {};
    if (!duckData.nombre.trim()) {
      errores.nombre = "El nombre es obligatorio.";
    }

    if (!duckData.precio.trim()) {
      errores.precio = "El precio es obligatorio.";
    } else if (isNaN(Number(duckData.precio))) {
      errores.precio = "El precio debe ser un número válido (Ej: 5.99).";
    }

    if (!duckData.categoria.trim()) {
      errores.categoria = "La categoría es obligatoria.";
    }
    return errores;
  };
  {
    /* Evitar duplicados de la categoria en el select.
        Se queda con la primera ocurrencia de cada categoría
    */
  }
  const categorias = ducklyn
    .map((pato) => pato.categoria)
    .filter((categoria, posicionActual, listaCompleta) => {
      return listaCompleta.indexOf(categoria) === posicionActual;
    });

  const handleDuckChange = (e) => {
    const { id, value } = e.target;

    setDuckData((prev) => ({
      ...prev,
      [id]: value,
    }));

    //Limpiar solo el error del campo editado (basicamente para que no salga en rojo 
    // si se ha modificado ese campo)
    if (duckErrors[id]) {
      setDuckErrors((prev) => ({
        ...prev,
        [id]: "",
      }));
    }
  };

  const handleDuckSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const errors = validateDuck(duckData);
    setDuckErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Pato", duckData);
      setDuckData(ducksObj);
      setSubmitted(false);
    }
  };

  //Foco primer error siguiendo un orden
  useEffect(() => {
    if (!submitted) return;

    const order = [
      "nombre",
      "precio",
      "categoria",
      "imagen",
      "detalles",
      "descripcion",
    ];
    const primero = order.find((campo) => duckErrors[campo]);

    if (primero) {
      const el = document.getElementById(primero);
      el?.focus();
      //Lo pogo en false para que al escribir una letra no me salte al siguiente label (no se "actualice")
      setSubmitted(false);
    }
  }, [duckErrors, submitted]);

  return (
    <section className="contenedor__form">
      <h3 className="contenedor__titulo mb-4 text-center">Añadir pato</h3>
      <form onSubmit={handleDuckSubmit} className="space-y-4" noValidate>
        {/*Pantallas móvil 2 pasos y solo se muestra si la pantalla es menor a 768*/}
        {windowWidth < 768 ? (
          <FormPhone
            siguiente={siguiente}
            setSiguiente={setSiguiente}
            duckData={duckData}
            duckErrors={duckErrors}
            setDuckErrors={setDuckErrors}
            categorias={categorias}
            handleDuckChange={handleDuckChange}
            handlePaso1={handlePaso1}
          />
        ) : (
          <FormPC
            duckData={duckData}
            duckErrors={duckErrors}
            categorias={categorias}
            handleDuckChange={handleDuckChange}
          />
        )}
      </form>
    </section>
  );
}

export default Form;
