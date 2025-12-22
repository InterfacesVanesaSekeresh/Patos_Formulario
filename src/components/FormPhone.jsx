import FormInput from "./FormInput";

/**
 * FormPhone Component
 * 
 * A multi-step form component for creating or editing duck product information.
 * Displays different form sections based on the current step (1 or 2).
 * 
 * @component
 * @param {number} siguiente - Current form step (1 or 2)
 * @param {Function} setSiguiente - Function to update the current form step
 * @param {Object} duckData - Object containing duck product data (nombre, precio, categoria, imagen, detalles, descripcion)
 * @param {Object} duckErrors - Object containing validation error messages for each field
 * @param {Function} setDuckErrors - Function to update form validation errors
 * @param {string[]} categorias - Array of available product categories
 * @param {Function} handleDuckChange - Function to handle input field changes
 * 
 * @returns {JSX.Element} A form section with step-based conditional rendering
 * 
 * @description
 * Step 1: Collects basic product information (name, price, category) with validation
 * Step 2: Collects additional details (image URL, details, description)
 * 
 * Validation on Step 1:
 * - nombre (name): Required, must not be empty
 * - precio (price): Required, must be a valid number
 * - categoria (category): Required, must be selected from available options
 */
function FormPhone({
  siguiente,
  setSiguiente,
  duckData,
  duckErrors,
  setDuckErrors,
  categorias,
  handleDuckChange,
}) {
  const validarPaso1 = () => {
    const errores = {};
    if (!duckData.nombre.trim()) errores.nombre = "El nombre es obligatorio.";

    if (!duckData.precio.trim()) {
      errores.precio = "El precio es obligatorio.";
    } else if (isNaN(Number(duckData.precio))) {
      errores.precio = "El precio debe ser un número válido (Ej: 5.99).";
    }
    
    if (!duckData.categoria.trim())
      errores.categoria = "La categoría es obligatoria.";

    return errores;
  };

  return (
    <section className="space-y-6">
      {siguiente === 1 && (
        <section className="space-y-4">
          <FormInput
            nombre="Pato nombre:"
            id="nombre"
            type="text"
            value={duckData.nombre}
            onChange={handleDuckChange}
            error={duckErrors.nombre}
            errorId="error-nombre"
          />

          <FormInput
            nombre="Precio:"
            id="precio"
            type="text"
            value={duckData.precio}
            onChange={handleDuckChange}
            error={duckErrors.precio}
            errorId="error-precio"
          />

          <section>
            <label className="contenedor__texto-largo">Categoría:</label>
            <select
              id="categoria"
              value={duckData.categoria}
              onChange={handleDuckChange}
              className={`mt-1 block w-full p-2 border ${
                duckErrors.categoria ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            >
              <option value="" disabled>
                Selecciona una categoría
              </option>
              {categorias.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            {duckErrors.categoria && (
              <p className="text-red-600 text-sm">{duckErrors.categoria}</p>
            )}
          </section>

          <button
            type="button"
            onClick={() => { const errores = validarPaso1();

            //Si hay errores, no avanzar
            if (Object.keys(errores).length > 0) { 
                setDuckErrors(errores); 
                return;
            }
            setSiguiente(2);
        }}
            className="w-full py-2 px-4 rounded-md text-white bg-blue-600"
          >
            Siguiente
          </button>
        </section>
      )}

      {siguiente === 2 && (
        <section className="space-y-4">
          <FormInput
            nombre="Imagen:"
            id="imagen"
            type="text"
            value={duckData.imagen}
            onChange={handleDuckChange}
            error={duckErrors.imagen}
            errorId="error-imagen"
          />

          <FormInput
            nombre="Detalles:"
            id="detalles"
            type="text"
            value={duckData.detalles}
            onChange={handleDuckChange}
            error={duckErrors.detalles}
            errorId="error-detalles"
          />

          <section>
            <label className="contenedor__texto-largo">Descripción:</label>
            <textarea
              id="descripcion"
              value={duckData.descripcion}
              onChange={handleDuckChange}
              rows="4"
              className={`mt-1 block w-full p-2 border ${
                duckErrors.descripcion ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            />
            {duckErrors.descripcion && (
              <p className="text-red-600 text-sm">{duckErrors.descripcion}</p>
            )}
          </section>

          <section className="flex gap-2">
            <button
              type="button"
              onClick={() => setSiguiente(1)}
              className="w-full py-2 px-4 rounded-md text-white bg-blue-600"
            >
              Atrás
            </button>

            <button
              type="submit"
              className="w-full py-2 px-4 rounded-md text-white bg-blue-600"
            >
              Añadir pato
            </button>
          </section>
        </section>
      )}
    </section>
  );
}

export default FormPhone;
