# Duck Detail(`DuckDetailsDocusaurus`)

Este componente de React, denominado `DuckDetailsDocusaurus` en el código, está diseñado para mostrar la información completa de un producto (en este caso, un pato coleccionable), incluyendo su imagen, nombre, categoría, descripción, precio y detalles adicionales.

## Características Principales

- **Diseño de Tarjeta Detallada:** Presenta la información del producto en un formato limpio y organizado (`<article>`).
- **Accesibilidad:** Implementa buenas prácticas de accesibilidad:
  - Todas las imágenes incluyen **texto alternativo** descriptivo.
  - La estructura del contenido facilita la lectura por **lectores de pantalla**.
- **Estilización con Tailwind CSS:** Usa clases de Tailwind para lograr un diseño responsivo y consistente.
- **Estado Seguro:** Si no se recibe un producto válido, muestra un mensaje accesible de “Pato no encontrado”.

## Props

| Propiedad          | Tipo     | Requerido | Descripción                                           | Ejemplo                                                                       |
| ------------------ | -------- | --------- | ----------------------------------------------------- | ----------------------------------------------------------------------------- |
| `pato`             | `Object` | Sí        | Objeto que contiene toda la información del producto. | `{ nombre: "Pato Clásico", precio: "2.00€", ... }`                            |
| `pato.nombre`      | `string` | Sí        | Nombre del producto.                                  | `"Pato Clásico"`                                                              |
| `pato.imagen`      | `string` | Sí        | URL de la imagen del producto.                        | `"https://www.paturros.es/wp-content/uploads/2021/06/patito-goma-pirata.jpg"` |
| `pato.categoria`   | `string` | Sí        | Categoría del producto.                               | `"Fantástico"`                                                                |
| `pato.descripcion` | `string` | Sí        | Descripción corta del producto.                       | `"El pato amarillo tradicional"`                                              |
| `pato.precio`      | `string` | Sí        | Precio del producto.                                  | `"2.00€"`                                                                     |
| `pato.detalles`    | `string` | No        | Información adicional del producto.                   | `"Fabricado en plástico BBH"`                                                 |

## Uso

```jsx
import DuckDetailsDocusaurus from "@site/src/components/DuckDetailsDocusaurus";

function App() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {/* Ejemplo 1: Pato Clásico */}
      <DuckDetailsDocusaurus
        pato={{
          nombre: "Pato Clásico",
          imagen:
            "https://m.media-amazon.com/images/I/41yvxsHIJ6L._AC_UF1000,1000_QL80_.jpg",
          categoria: "Tradicional",
          descripcion:
            "El pato amarillo de toda la vida, perfecto para cualquier bañera.",
          precio: "2.00€",
          detalles: "Fabricado en PVC seguro y resistente al agua.",
        }}
      />

      {/* Ejemplo 2: Pato Pirata */}
      <DuckDetailsDocusaurus
        pato={{
          nombre: "Pato Pirata",
          imagen:
            "https://www.paturros.es/wp-content/uploads/2021/06/patito-goma-pirata.jpg",
          categoria: "Temáticos",
          descripcion: "Un pato pirata con parche, sombrero y actitud rebelde.",
          precio: "6.50€",
          detalles: "Incluye mini-espada decorativa y pañuelo rojo.",
        }}
      />

      {/* Ejemplo 3: Producto no encontrado */}
      <DuckDetailsDocusaurus pato={null} />
    </section>
  );
}
```
