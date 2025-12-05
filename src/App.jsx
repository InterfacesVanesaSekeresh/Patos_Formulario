import Patos from "./pages/Patos.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import ContenidoPrincipal from "./components/ContenidoPrincipal.jsx";
import DetallesPato from "./components/DetallesPato.jsx";
import Footer from "./components/Footer.jsx";
/**
 * Componente principal de la aplicación
 * @returns  Devuelve la estructura base de la aplicación
 */
function App() {
  return (
    <>
      <Header /> {/*Encabezado */}
      <Routes>
        <Route path="/" element={<ContenidoPrincipal />}>
          <Route index element={<Home />} />
          <Route path="inicio" element={<Navigate to="/" replace />} />
          <Route path="patos" element={<Patos />} />
          <Route path="patos/:id" element={<DetallesPato />} />
          {/*Por si no existe la pág */}
          <Route
            path="*"
            element={<p>La página que buscas no existe</p>}
          />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
