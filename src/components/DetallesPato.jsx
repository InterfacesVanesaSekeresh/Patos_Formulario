import { useParams, useNavigate } from "react-router-dom";
import ducklyns from "../data/ducklyn";

function DetallesPato() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pato = ducklyns.find((p) => p.id === parseInt(id));

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
        {/* Pie de foto */}
        <figcaption className="sr-only">{pato.nombre}</figcaption>
      </figure>

      <section>
        <p className="contenedor__texto-largo !font-bold">{pato.categoria}</p>
        <p className="contenedor__texto-largo">{pato.descripcion}</p>
        <p className="contenedor__precio !text-base">{pato.precio}</p>
      </section>

      <section>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-[#09207d] text-white rounded"
        >
          Volver
        </button>
      </section>

      <section>
        <p className="contenedor__texto-normal">{pato.detalles}</p>
      </section>
    </article>
  );
}
export default DetallesPato;
