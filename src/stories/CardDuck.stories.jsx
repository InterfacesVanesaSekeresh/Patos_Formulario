import CardDuck from "../components/CardDuck";
import "../assets/styles/index.css";

export default {
  title: "Tarjeta Pato",
  component: CardDuck,
  tags: ["autodocs"],
  argTypes: {
    foto: {
      control: "text",
      description: "URL de la imagen del pato",
      defaultValue:
        "https://m.media-amazon.com/images/I/41yvxsHIJ6L._AC_UF1000,1000_QL80_.jpg",
    },
    nombre: {
      control: "text",
      description: "Nombre del pato",
    },
    descripcion: {
      control: "text",
      description: "Descripción corta del pato",
    },
    precio: {
      control: "text",
      description: "Precio del pato",
    },
  },
  parameters: {
    layout: "centered",
  },
};

export const Clasico = {
  args: {
    foto: "https://m.media-amazon.com/images/I/41yvxsHIJ6L._AC_UF1000,1000_QL80_.jpg",
    nombre: "Pato Clásico",
    descripcion: "El pato de goma tradicional, amarillo y simpático.",
    precio: "2.00€",
  },
};

export const Beisbolista = {
  args: {
    foto: "https://www.qualitylogoproducts.com/toys/baseball-duck-hq.jpg",
    nombre: "Pato Beisbolista",
    descripcion: "Con gorra y bate, este pato está listo para el home run.",
    precio: "2.99€",
  },
};

export const SinDescripcion = {
  args: {
    foto: "https://www.paturros.es/wp-content/uploads/2021/01/pato-goma-frankenstein.jpg",
    nombre: "Pato Frankenstein",
    descripcion: "",
    precio: "2.99€",
  },
};

export const SoloImagen = {
  args: {
    foto: "https://www.paturros.es/wp-content/uploads/2021/06/patito-goma-pirata.jpg",
    nombre: "",
    descripcion: "",
    precio: "",
  },
};
