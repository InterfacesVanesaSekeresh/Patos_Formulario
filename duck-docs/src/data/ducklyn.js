const ducklyns = [
  {
    id: 1,
    nombre: "Pato Clásico",
    descripcion: "El pato de goma tradicional, amarillo y simpático.",
    precio: "2.00€",
    categoria: "Clásico",
    imagen:
      "https://m.media-amazon.com/images/I/41yvxsHIJ6L._AC_UF1000,1000_QL80_.jpg",
    detalles: "Es de plástico BBH",
  },
  {
    id: 2,
    nombre: "Pato Surfista",
    descripcion: "Listo para las olas con su tabla de surf y actitud relajada.",
    precio: "2.99€",
    categoria: "Deportivo",
    imagen:
      "https://www.duckshop.de/media/image/c2/02/50/Quietscheentchen_Surfer_106532856_600x600.jpg",
    detalles: "Es de plástico BBH",
  },
  {
    id: 3,
    nombre: "Pato Rugbista",
    descripcion:
      "Con casco y camiseta, preparado para el contacto en el campo.",
    precio: "2.99€",
    categoria: "Deportivo",
    imagen:
      "https://www.paturros.es/wp-content/uploads/2024/04/comprar-patito-goma-rugby.jpg",
    detalles: "Es de plástico BBH",
  },
  {
    id: 4,
    nombre: "Pato Beisbolista",
    descripcion: "Con gorra y bate, este pato está listo para el home run.",
    precio: "2.99€",
    categoria: "Deportivo",
    imagen: "https://www.qualitylogoproducts.com/toys/baseball-duck-hq.jpg",
    detalles: "Es de plástico BBH",
  },
  {
    id: 5,
    nombre: "Pato Boxeador",
    descripcion: "Guantes puestos y mirada feroz, el campeón del ring.",
    precio: "2.99€",
    categoria: "Deportivo",
    imagen:
      "https://canarddebain.com/cdn/shop/files/CanardBoxeur-Schnabels.jpg?v=1750354861",
    detalles: "Es de plástico BBH",
  },
  {
    id: 6,
    nombre: "Pato Frankenstein",
    descripcion:
      "Verde y con cicatrices, el pato más monstruosamente divertido.",
    precio: "2.99€",
    categoria: "Fantástico",
    imagen:
      "https://www.paturros.es/wp-content/uploads/2021/01/pato-goma-frankenstein.jpg",
    detalles: "Es de plástico BBH",
  },
  {
    id: 7,
    nombre: "Pato Pirata",
    descripcion:
      "Con parche en el ojo y sombrero, este pato surca las bañeras como los siete mares.",
    precio: "3.50€",
    categoria: "Aventurero",
    imagen:
      "https://www.paturros.es/wp-content/uploads/2021/06/patito-goma-pirata.jpg",
    detalles: "Es de plástico BBH",
  },
  {
    id: 8,
    nombre: "Pato Unicornio",
    descripcion:
      "Color pastel y cuerno mágico, el pato más fantástico para soñar en la bañera.",
    precio: "3.99€",
    categoria: "Fantástico",
    imagen:
      "https://www.paturros.es/wp-content/uploads/2021/09/comprar-patito-goma-unicornio-xxl-rosa.jpg",
    detalles: "Es de plástico BBH",
  },
  {
    id: 9,
    nombre: "Pato Doctor",
    descripcion: "Con bata blanca y estetoscopio, cuida de todos en la bañera.",
    precio: "3.20€",
    categoria: "Profesiones",
    imagen:
      "https://www.paturros.es/wp-content/uploads/2021/06/comprar-patito-goma-doctor.jpg",
    detalles: "Es de plástico BBH",
  },
  {
    id: 10,
    nombre: "Pato Chef",
    descripcion:
      "Sombrero de cocinero y campana en mano, listo para preparar comida.",
    precio: "3.20€",
    categoria: "Profesiones",
    imagen:
      "https://www.paturros.es/wp-content/uploads/2021/01/pato-goma-chef.jpg",
    detalles: "Es de plástico BBH",
  },
  {
    id: 11,
    nombre: "Pato Policía",
    descripcion: "Con gorra azul y silbato, mantiene el orden en la bañera.",
    precio: "3.20€",
    categoria: "Profesiones",
    imagen:
      "https://www.paturros.es/wp-content/uploads/2021/01/pato-goma-policia.jpg",
    detalles: "Es de plástico BBH",
  },
  {
    id: 12,
    nombre: "Pato Bombero",
    descripcion: "Con casco rojo y manguera, apaga incendios de espuma.",
    precio: "3.20€",
    categoria: "Profesiones",
    imagen:
      "https://www.paturros.es/wp-content/uploads/2021/01/pato-goma-bombero.jpg",
    detalles: "Es de plástico BBH",
  },
  {
    id: 13,
    nombre: "Pato Vampiro",
    descripcion: "Con capa negra y colmillos, ideal para baños de medianoche.",
    precio: "3.50€",
    categoria: "Fantástico",
    imagen:
      "https://m.media-amazon.com/images/I/41FZAzKqHyL._AC_UF1000,1000_QL80_.jpg",
    detalles: "Es de plástico BBH",
  },
  {
    id: 14,
    nombre: "Pato Princesa",
    descripcion: "Corona dorada y vestido rosa, reina de la bañera.",
    precio: "3.99€",
    categoria: "Fantástico",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlmgw6gQch6PKvZ3lh_5KhcOMxWCV2LdzFFg&s",
    detalles: "Es de plástico BBH",
  },
  {
    id: 15,
    nombre: "Pato Astronauta",
    descripcion: "Con casco espacial, explora galaxias de burbujas.",
    precio: "4.20€",
    categoria: "Aventurero",
    imagen:
      "https://www.paturros.es/wp-content/uploads/2022/02/pato-goma-astronauta.jpg",
    detalles: "Es de plástico BBH",
  },
  {
    id: 16,
    nombre: "Pato Mago",
    descripcion: "Con varita y sombrero, convierte el agua en magia.",
    precio: "3.80€",
    categoria: "Fantástico",
    imagen:
      "https://canarddebain.com/cdn/shop/files/CanardMagicien01.jpg?v=1750354758&width=1946",
    detalles: "Es de plástico BBH",
  },
  {
    id: 17,
    nombre: "Pato Diablo",
    descripcion: "Con cuernos y tridente, travieso pero encantador.",
    precio: "3.50€",
    categoria: "Fantástico",
    imagen:
      "https://www.paturros.es/wp-content/uploads/2021/01/pato-goma-diablo.jpg",
    detalles: "Es de plástico BBH",
  },
  {
    id: 18,
    nombre: "Pato Ángel",
    descripcion: "Con aureola y alas blancas, el más puro del estanque.",
    precio: "3.50€",
    categoria: "Fantástico",
    imagen:
      "https://www.paturros.es/wp-content/uploads/2021/01/pato-goma-angel.jpg",
    detalles: "Es de plástico BBH",
  },
  {
    id: 19,
    nombre: "Pato Vaquero",
    descripcion:
      "Con sombrero tejano y pañuelo, patrulla el lejano oeste de la bañera.",
    precio: "3.20€",
    categoria: "Aventurero",
    imagen: "https://m.media-amazon.com/images/I/613SzAa5lXL.jpg",
    detalles: "Es de plástico BBH",
  },
  {
    id: 20,
    nombre: "Pato Esqueleto",
    descripcion:
      "Diseño de huesos blancos sobre fondo negro, ideal para Halloween.",
    precio: "3.50€",
    categoria: "Fantástico",
    imagen:
      "https://www.paturros.es/wp-content/uploads/2022/11/pato-goma-esqueleto.jpg",
    detalles: "Es de plástico BBH",
  },
  {
    id: 21,
    nombre: "Pato Marinero",
    descripcion:
      "Con gorra blanca y uniforme azul, navega por mares de espuma.",
    precio: "3.20€",
    categoria: "Profesiones",
    imagen:
      "https://www.paturros.es/wp-content/uploads/2021/04/comprar-patito-goma-marinero.jpg",
    detalles: "Es de plástico BBH",
  },
  {
    id: 22,
    nombre: "Pato Rockero",
    descripcion: "Con guitarra y gafas oscuras, estrella del baño.",
    precio: "3.80€",
    categoria: "Estilo",
    imagen:
      "https://www.paturros.es/wp-content/uploads/2023/01/comprar-patito-goma-rockero.jpg",
    detalles: "Es de plástico BBH",
  },
  {
    id: 23,
    nombre: "Pato Navidad",
    descripcion: "Con gorro de Papá Noel, ideal para fiestas en la bañera.",
    precio: "3.99€",
    categoria: "Temporada",
    imagen:
      "https://www.paturros.es/wp-content/uploads/2021/08/comprar-patito-goma-arbol-navidad.jpg",
    detalles: "Es de plástico BBH",
  },
  {
    id: 24,
    nombre: "Pato Bruja",
    descripcion: "Con sombrero de bruja y calabaza, el más espeluznante del baño.",
    precio: "3.99€",
    categoria: "Temporada",
    imagen: "https://www.duckstore.es/2840-home_default/bruja-latex.jpg",
    detalles: "Es de plástico BBH",
  },
];

export default ducklyns;
