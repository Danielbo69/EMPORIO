import { Routes, Route } from "react-router-dom";
import NavMenu from "../components/navbar/Navbar";
import Home from "../views/home/Home";
import ViewServicios from "../views/servicios/viewServicios/ViewServicios";
import Links from "../components/Links/Links";
import ViewGlasses from "../views/glasses/viewGlasses/ViewGlasses";

function Router() {
  return (
    <>
    <NavMenu />
    <Links />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios/:id" element={<ViewServicios />} />
        <Route path="/lentes/:id" element={<ViewGlasses />} />
      </Routes>
    </>
  );
}

export default Router;
