
/**
 * Displays detailed information about a duck product.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.pato - Duck object containing product information
 * @param {string} props.pato.nombre - The name of the duck product
 * @param {string} props.pato.imagen - URL of the duck product image
 * @param {string} props.pato.categoria - Category classification of the duck
 * @param {string} props.pato.descripcion - Detailed description of the duck product
 * @param {string|number} props.pato.precio - Price of the duck product
 * @param {string} props.pato.detalles - Additional details about the duck product
 * @returns {JSX.Element} A styled article displaying duck product details, or a not-found message if pato is null/undefined
 * 
 * @example
 * const duck = {
 *   nombre: "Pato Real",
 *   imagen: "url/to/image.jpg",
 *   categoria: "Acuáticos",
 *   descripcion: "Hermoso pato de agua dulce",
 *   precio: "$99.99",
 *   detalles: "Información adicional..."
 * };
 * return <DuckDetailsStoryBook pato={duck} />
 */
function DuckDetailsStoryBook({ pato }) {
  if (!pato){
    return <p>Pato no encontrado</p>;
  }

  return (
    <article className="max-w-2xl mx-auto p-4 space-y-4">
      <header>
        <h1 className="contenedor__titulo">{pato.nombre}</h1>
      </header>

      <figure className="text-center">
        <img
          src={pato.imagen}
          alt={`Imagen de ${pato.nombre}`}
          className="mx-auto w-64 h-auto rounded"
        />
      </figure>

      <section>
        <p className="contenedor__texto-largo !font-bold">{pato.categoria}</p>
        <p className="contenedor__texto-largo">{pato.descripcion}</p>
        <p className="contenedor__precio !text-base">{pato.precio}</p>
      </section>

      <section>
        <p className="contenedor__texto-normal">{pato.detalles}</p>
      </section>
    </article>
  );
}

export default DuckDetailsStoryBook;
