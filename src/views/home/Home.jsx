import "./Home.css";
import { infoEmpresa } from "../../data/data";
import Header from "../../components/header/Header";
import AboutMe from "../aboutme/AboutMe";
import Catalogue from "../catalogue/Catalogue";
import Servicios from "../servicios/Servicios";

function Home() {
  return (
    <>
      <Header />
      <AboutMe infoEmpresa={infoEmpresa} />
      <Servicios />
      <Catalogue />
    </>
  );
}

export default Home;
