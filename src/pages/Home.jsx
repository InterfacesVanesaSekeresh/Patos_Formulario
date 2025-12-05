import { Link } from "react-router-dom";
import ContenedorGlobal from "../components/ContenedorGlobal";
import TarjetaPato from "../components/TarjetaPato";
import ducklyn from "../data/ducklyn";
import Slogan from "../assets/images/Slogan.png";

/**
 * Página principal de la aplicación.
 * @returns Devuelve el componente <ContenedorGlobal> con el título "Nuestros Patos"
 */
function Home() {
  return (
    <ContenedorGlobal titulo="Nuestros Patos">
      {/* Banner solo visible en pantallas >= sm */}
      <section className="hidden sm:relative sm:flex sm:justify-center sm:mb-8">
        <img
          src={Slogan}
          alt="Slogan de Ducklyn"
          className="w-full max-w-[48rem] h-auto object-contain rounded-2xl shadow-xl"
        />

        <section className="absolute inset-0 flex flex-col items-start justify-center px-6 max-w-[48rem] mx-auto">
          <p className="text-white font-bold font-baloo text-xl sm:text-2xl md:text-3xl mb-3 tracking-wider">
            ¡Chapotea con estilo!
          </p>

          <p className="text-white font-bold font-baloo text-xs sm:text-sm md:text-base leading-snug mb-6 tracking-wide">
            En Ducklyn fabricamos nuestros patos con plástico reciclado de alta calidad,
            <br />
            son seguros, resistentes y diseñados para durar,
            <br />
            porque creemos que la calidad también puede ser sostenible.
          </p>

          <p>
            <Link
              to="/patos"
              className="w-fit px-4 sm:px-6 bg-[#09207D] text-white font-bold font-baloo py-2 rounded-md shadow-lg hover:bg-[#031a51] transition-colors text-sm sm:text-base tracking-wide"
            >
              Conócenos
            </Link>
          </p>
        </section>
      </section>

      {/* Grid de patos */}
      <section
        aria-label="Listado de patos destacados"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch"
      >
        {ducklyn.slice(0, 8).map((pato) => (
          <Link
            key={pato.id}
            to={`/patos/${pato.id}`}
            aria-label={`Ver detalles de ${pato.nombre}`}
          >
            <TarjetaPato nombre={pato.nombre} foto={pato.imagen} />
          </Link>
        ))}
      </section>
    </ContenedorGlobal>
  );
}

export default Home;
