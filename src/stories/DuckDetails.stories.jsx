import DuckDetailsStoryBook from "../components/DuckDetailsStoryBook"; // Se crea este porque DuckDetails.jsx usa useParams y en Storybook no funciona
import ducklyns from "../data/ducklyn";
import "../assets/styles/index.css";

export default {
  title: "Detalles del Pato (Autodocs)",
  component: DuckDetailsStoryBook,
  tags: ["autodocs"],
  argTypes: {
    pato: {
      control: "object",
      description: "Objeto completo del pato a visualizar",
    },
  },
  parameters: {
    layout: "centered",
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
