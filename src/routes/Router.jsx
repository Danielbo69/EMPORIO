import { Routes, Route } from "react-router-dom";
import NavMenu from "../components/navbar/Navbar";
import Home from "../views/home/Home";
import Catalogue from "../views/catalogue/Catalogue";
import ViewServicios from "../views/servicios/viewServicios/ViewServicios";
import AboutMe from "../views/aboutme/AboutMe";
import Whatsapp from "../components/whatsapp/Whatsapp";
import Lentes from "../views/lentes/Lentes";

function Router() {
  return (
    <>
    <NavMenu />
    <Whatsapp />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/quienesSomos" element={<AboutMe />} /> */}
        <Route path="/servicios/:id?" element={<ViewServicios />} />
        <Route path="/catalogo" element={<Catalogue />} />
        <Route path="/lentes" element={<Lentes />} />
        {/* <Route path="/contacto" element={<Contacto />} /> */}
      </Routes>
    </>
  );
}

export default Router;
