import "./Home.css";
import { infoEmpresa } from "../../data/data";
import Header from "../../components/header/Header";
import AboutMe from "../../components/aboutme/AboutMe";
import Catalogue from "../catalogue/Catalogue";
import Whatsapp from "../../components/whatsapp/Whatsapp";
import Servicios from "../servicios/Servicios";

function Home() {
  return (
    <>
      <Header />
      <AboutMe infoEmpresa={infoEmpresa} />
      <Servicios />
      <Catalogue />
      <Whatsapp />
    </>
  );
}

export default Home;
