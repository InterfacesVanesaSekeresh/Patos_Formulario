
/**
 * CardDuck Component
 * 
 * A card component that displays duck product information with image, name, description, and price.
 * Fully accessible with semantic HTML and ARIA attributes.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.nombre - The name of the duck product
 * @param {string} props.foto - The image URL for the duck product
 * @param {string} props.descripcion - The description of the duck product (optional)
 * @param {string} props.precio - The price of the duck product (optional)
 * 
 * @returns {JSX.Element} A card article element displaying duck product details
 * 
 */
function CardDuck({ nombre, foto, descripcion, precio }) {
  return (
    <article
      tabIndex={0}
      aria-label={nombre}
 className="max-w-sm w-full h-full p-6 sm:p-3 rounded-md bg-white shadow-sm sm:shadow-md flex flex-col justify-between"    >
      <figure className="w-full aspect-square rounded-lg bg-gray-100 overflow-hidden">
        <img
          src={foto}
          alt={`Foto de ${nombre}`}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        {nombre && <figcaption className="sr-only">{nombre}</figcaption>}
      </figure>

      <section className="mt-3">
        <h3 className="text-black text-lg font-bold baloo tracking-wide leading-tight">
          <strong>{nombre}</strong>
        </h3>
        {descripcion && (
          <p className="contenedor__texto-normal font-bold">{descripcion}</p>
        )}
        {precio && <p className="contenedor__precio">{precio}</p>}
      </section>
    </article>
  );
}
export default CardDuck;
