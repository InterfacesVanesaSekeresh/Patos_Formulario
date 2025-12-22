import DuckDetailsStoryBook from "../components/DuckDetailsStoryBook"; // Se crea este porque DuckDetails.jsx usa useParams y en Storybook no funciona
import ducklyns from "../data/ducklyn";
import "../assets/styles/index.css";

export default {
  title: "Detalles forma narrativa del Pato",
  component: DuckDetailsStoryBook,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ` El componente **DuckDetailsStoryBook** permite visualizar la información completa de un producto (pato) dentro de la aplicación. Incluye: - Imagen del pato - Nombre - Categoría - Descripción - Precio - Detalles adicionales Estas historias muestran distintos estados del componente para facilitar su documentación y pruebas visuales. `,
      },
    },
  },
  argTypes: {
    pato: {
      control: "object",
      description: "Objeto completo del pato a visualizar",
    },
  },
};

export const Clasico = {
  args: {
    pato: ducklyns[0],
  },
};

export const Princesa = {
  args: {
    pato: ducklyns[13],
  },
};

export const NoEncontrado = {
  args: {
    pato: null,
  },
};
