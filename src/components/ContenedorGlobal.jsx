function ContenedorGlobal({ titulo, children }) {
  return (
    <section
      aria-labelledby={titulo ? "main-section-title" : undefined}
      className="w-full max-w-7xl"
    >
      {titulo && (
        <h1 id="main-section-title" className="contenedor__titulo mb-2">
          {titulo}
        </h1>
      )}
      {children}
    </section>
  );
}
export default ContenedorGlobal;
