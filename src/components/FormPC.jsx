import FormInput from "./FormInput";
/**
 * FormPC Component
 * 
 * A form component for entering and managing duck product information.
 * Renders input fields for duck name, price, category, image URL, details,
 * and a textarea for description. Displays validation errors for each field.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.duckData - Object containing the current form data values
 * @param {string} props.duckData.nombre - Duck product name
 * @param {string} props.duckData.precio - Duck product price
 * @param {string} props.duckData.categoria - Selected category
 * @param {string} props.duckData.imagen - Image URL
 * @param {string} props.duckData.detalles - Product details
 * @param {string} props.duckData.descripcion - Product description
 * @param {Object} props.duckErrors - Object containing validation error messages
 * @param {string} [props.duckErrors.nombre] - Error message for name field
 * @param {string} [props.duckErrors.precio] - Error message for price field
 * @param {string} [props.duckErrors.categoria] - Error message for category field
 * @param {string} [props.duckErrors.imagen] - Error message for image field
 * @param {string} [props.duckErrors.detalles] - Error message for details field
 * @param {string} [props.duckErrors.descripcion] - Error message for description field
 * @param {Array<string>} props.categorias - Array of available category options
 * @param {Function} props.handleDuckChange - Callback function to handle input changes
 * @returns {JSX.Element} The rendered form section with input fields and submit button
 */
function FormPC({ duckData, duckErrors, categorias, handleDuckChange }) {
  return (
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
      </section>

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
        <label htmlFor="descripcion" className="contenedor__texto-largo">
          Descripción:
        </label>
        <textarea
          id="descripcion"
          value={duckData.descripcion}
          onChange={handleDuckChange}
          required
          rows="4"
          minLength={20}
          className={`mt-1 block w-full p-2 border ${
            duckErrors.descripcion ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:ring-blue-800 focus:border-blue-800`}
          aria-invalid={!!duckErrors.descripcion}
          aria-describedby={
            duckErrors.descripcion ? "error-descripcion" : undefined
          }
        />
        {duckErrors.descripcion && (
          <p id="error-descripcion" className="mt-1 text-sm text-red-600">
            {duckErrors.descripcion}
          </p>
        )}
      </section>

      <button
        type="submit"
        className="w-full py-2 px-4 rounded-md text-white bg-blue-600"
      >
        Añadir pato
      </button>
    </section>
  );
}

export default FormPC;
