import ContenedorGlobal from "../components/ContenedorGlobal";
import TarjetaPato from "../components/TarjetaPato";
import ducklyn from "../data/ducklyn";
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { useMemo } from "react";

/**
 * Página de catálogo de patos.
 * @returns Devuelve el componente <ContenedorGlobal> con el título "Nuestros Patos"
 */
function Patos() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPatos = useMemo(() => {
    if(!searchTerm){
      return ducklyn;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return ducklyn.filter((pato) =>
      pato.nombre.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm]);

  return (
    <ContenedorGlobal titulo="Nuestros Patos">
      <p className="contenedor__texto-largo mb-6">
        Coloridos, divertidos y coleccionables
      </p>

     <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Buscar patos por nombre..."
      />

      <section
        aria-label="Listado completo de patos"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch"
      >
         {filteredPatos.length > 0 ? (
        filteredPatos.map((pato) => (
          <Link
            key={pato.id}
            to={`/patos/${pato.id}`}
            aria-label={`Ver detalles de ${pato.nombre}`}
          >
            <TarjetaPato
              nombre={pato.nombre}
              foto={pato.imagen}
              descripcion={pato.descripcion}
              precio={pato.precio}
            />
          </Link>
        ))
        ) : (
          // Mensaje si no hay resultados
          <p className="col-span-full text-center text-gray-500 p-4">
            No se encontraron patos con el término "{searchTerm}".
          </p>
        )}
      </section>
    </ContenedorGlobal>
  );
}

export default Patos;
