import { Routes, Route } from "react-router-dom";
import NavMenu from "../components/navbar/Navbar";
import Home from "../views/home/Home";
import Glasses from "../views/glasses/Glasses";
import Catalogue from "../views/catalogue/Catalogue";
import ViewServicios from "../views/servicios/viewServicios/ViewServicios";
import ViewAboutUs from "../views/aboutme/viewAboutUs/ViewAboutUs";
import Whatsapp from "../components/whatsapp/Whatsapp";

function Router() {
  return (
    <>
    <NavMenu />
    <Whatsapp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienesSomos" element={<ViewAboutUs />} />
        <Route path="/servicios/:id" element={<ViewServicios />} />
        <Route path="/catalogo" element={<Catalogue />} />
        <Route path="/lentes" element={<Glasses />} />
        {/* <Route path="/contacto" element={<Contacto />} /> */}
      </Routes>
    </>
  );
}

export default Router;
