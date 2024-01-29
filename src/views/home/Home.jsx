import "./Home.css";
import { infoEmpresa, services, glasses, tecnology, treatments } from "../../data/data";
import Header from "../../components/header/Header";
import AboutMe from "../aboutme/AboutMe";
import Tecnologias from "../tecnology/Tecnologias";
import Servicios from "../servicios/Servicios";
import Glasses from '../glasses/Glasses'
import Contacto from '../contacto/Contacto'
import Footer from '../footer/Footer'

function Home() {
  return (
    <>
      <Header />
      <AboutMe infoEmpresa={infoEmpresa} />
      <Servicios services={services} />
      <Tecnologias tecnology={tecnology} />
      <Glasses glasses={glasses} />
      <Contacto treatments={treatments} />
      <Footer /> 
    </>
  );
}

export default Home;
