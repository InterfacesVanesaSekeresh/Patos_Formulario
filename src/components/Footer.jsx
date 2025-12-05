import logo from "../assets/images/Pato.png";

/**
 * Pie de página de la aplicación
 * @returns <footer> semántico con contenido simplificado
 */
function Footer() {
  return (
    <footer className="contenedor__barra-principal">
      <section className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center px-4">
        
        <section aria-labelledby="footer-tema-1" className="hidden sm:block">
          <h3 id="footer-tema-1" className="font-bold text-lg mb-2">Tema</h3>
          <p>Página</p>
          <p>Página</p>
          <p>Página</p>
        </section>

        <section aria-labelledby="footer-tema-2" className="hidden sm:block">
          <h3 id="footer-tema-2" className="font-bold text-lg mb-2">Tema</h3>
          <p>Página</p>
          <p>Página</p>
          <p>Página</p>
        </section>

        <section aria-labelledby="footer-tema-3">
          <h3 id="footer-tema-3" className="font-bold text-lg mb-2">Tema</h3>
          <p>Página</p>
          <p>Página</p>
          <p>Página</p>
          
          {/* <figure className="flex flex-col items-end mt-2">
            <img
              src={logo}
              alt="Logo de Ducklyn"
              className="w-16 h-16 object-contain"
            />
            <figcaption className="sr-only">Ducklyn</figcaption>
          </figure> */}
        </section>
      </section>
    </footer>
  );
}

export default Footer;
