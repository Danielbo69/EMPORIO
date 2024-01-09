import { Routes, Route } from "react-router-dom";
import Home from "../views/home/Home";
import NavMenu from "../components/navbar/Navbar";
import Glasses from "../views/glasses/Glasses";
import ViewServicios from "../views/servicios/viewServicios/ViewServicios";

function Router() {
  return (
    <>
    <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/glasses" element={<Glasses />} />
        <Route path="/servicios/:id" element={<ViewServicios />} />
      </Routes>
    </>
  );
}

export default Router;
