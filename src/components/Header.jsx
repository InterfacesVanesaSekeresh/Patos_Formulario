import Nav from "./Nav.jsx";
import logo from "../assets/images/Pato.png";
import { Link } from "react-router-dom";

function Header() {
  {/* No poner ARTICLE, porque el header es como que ya lo contiene */}
  return ( 
    <header className="contenedor__barra-principal py-6">
      <section className="mx-auto flex justify-between items-center px-4">
        <section className="flex items-center gap-3">
          <Link to="/" aria-label="Ir al inicio">
            <img
              src={logo}
              alt="Logo de Ducklyn"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
            />
          </Link>
          <hgroup> {/*Agrupar titulo de la pág principal y subtítulo*/}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wide leading-tight">
              Ducklyn
            </h1>
            <p className="text-xs sm:text-sm lg:text-base font-extrabold text-black leading-none">
              Tu patito favorito
            </p>
          </hgroup>
        </section>
        <Nav />
      </section>
    </header>
  );
}
export default Header;
