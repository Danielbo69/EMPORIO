import "./Home.css";
import { infoEmpresa } from "../../data/data";
import Header from "../../components/header/Header";
import AboutMe from "../aboutme/AboutMe";
import Catalogue from "../catalogue/Catalogue";
import Servicios from "../servicios/Servicios";
import Lentes from '../lentes/Lentes'
import Contacto from '../contacto/Contacto'
import Footer from '../footer/Footer'

function Home() {
  return (
    <>
      <Header />
      <AboutMe infoEmpresa={infoEmpresa} />
      <Servicios />
      <Lentes />
      <Catalogue />
      <Contacto />
      <Footer /> 
    </>
  );
}

export default Home;
