function TarjetaPato({ nombre, foto, descripcion, precio, children }) {
  return (
    <article
      tabIndex={0}
      aria-label={nombre}
      className="flex flex-col justify-between w-full h-full p-6 sm:p-3 rounded-md bg-white shadow-sm sm:shadow-md"
    >
      <figure className="w-full aspect-square rounded-lg bg-gray-100 overflow-hidden">
        <img
          src={foto}
          alt={`Foto de ${nombre}`}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        {children && <figcaption className="sr-only">{children}</figcaption>}
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
export default TarjetaPato;
