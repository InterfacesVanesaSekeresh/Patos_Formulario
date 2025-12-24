import { useState } from "react";
import FormPC from "./FormPC";
import ducklyn from "../data/ducklyn";
import FormPhone from "./FormPhone";

/**
 * Form component for adding new duck entries to the system.
 * 
 * This component manages a form with two different layouts:
 * - Mobile view (FormPhone): A multi-step form (2 steps)
 * - Desktop view (FormPC): A single-page form
 * 
 * @component
 * @returns {JSX.Element} A section containing the duck form with responsive layout
 * 
 * @example
 * return <Form />
 * 
 * @state {Object} duckData - Object containing form field values (nombre, descripcion, precio, categoria, imagen, detalles)
 * @state {Object} duckErrors - Object containing validation error messages for each field
 * @state {number} siguiente - Current step number in the multi-step form (mobile only)
 * 
 * @constant {Object} ducksObj - Initial state template for duck data with empty string values
 * @constant {Array} categorias - Filtered array of unique duck categories from ducklyn data
 * 
 * @function validateDuck - Validates duck form data and returns error object
 * @param {Object} data - Duck data object to validate
 * @returns {Object} Object containing validation errors by field name
 * 
 * @function handleDuckChange - Updates form field value and clears associated error
 * @param {Event} e - Change event from input/select/textarea element
 * 
 * @function handleDuckSubmit - Handles form submission with validation
 * @param {Event} e - Submit event from form element
 */

const ducksObj = {
  nombre: "",
  descripcion: "",
  precio: "",
  categoria: "",
  imagen: "",
  detalles: "",
};

const validateDuck = (data) => {
  const errors = {};

  if (!data.nombre.trim()) errors.nombre = "El nombre es obligatorio.";

  if (!data.descripcion.trim() || data.descripcion.length < 20)
    errors.descripcion =
      "La descripción es obligatoria y debe tener un mín de 20 carácteres.";

  if (!data.precio.trim()) {
    errors.precio = "El precio es obligatorio.";
  } else if (isNaN(Number(data.precio))) {
    errors.precio = "El precio debe ser un número válido (Ej: 5.99).";
  }

  if (!data.categoria.trim()) errors.categoria = "La categoría es obligatoria.";

  if (!data.imagen.startsWith("http"))
    errors.imagen = "La URL de la imagen es obligatoria y debe ser válida.";

  if (!data.detalles.trim() || data.detalles.length < 5)
    errors.detalles = "Los detalles son obligatorios.";

  return errors;
};




function Form() {
  const [duckData, setDuckData] = useState(ducksObj);
  const [duckErrors, setDuckErrors] = useState({});
  const [siguiente, setSiguiente] = useState(1);

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

    if (duckErrors[id]) {
      setDuckErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  const handleDuckSubmit = (e) => {
    e.preventDefault();
    const errors = validateDuck(duckData);
    setDuckErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Pato", duckData);
      setDuckData(ducksObj);
    }
  };

  return (
    <section className="contenedor__form">
      <h3 className="contenedor__titulo mb-4 text-center">Añadir pato</h3>
      <form onSubmit={handleDuckSubmit} className="space-y-4" noValidate>
       
       {/*Móvil con 2 pasos*/}
        <section className="block md:hidden">
          <FormPhone
            siguiente={siguiente}
            setSiguiente={setSiguiente}
            duckData={duckData}
            duckErrors={duckErrors}
            setDuckErrors={setDuckErrors} 
            categorias={categorias}
            handleDuckChange={handleDuckChange}
          />
        </section>

        {/*PC*/}
        <section className="hidden md:block">
          <FormPC
            duckData={duckData}
            duckErrors={duckErrors}
            categorias={categorias}
            handleDuckChange={handleDuckChange}
          />
        </section>
      </form>
    </section>
  );
}

export default Form;
