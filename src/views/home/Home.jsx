import "./Home.css";
import { infoEmpresa, services, glasses, tecnology, treatments, photos } from "../../data/data";
import Header from "../../components/header/Header";
import AboutMe from "../aboutme/AboutMe";
import Tecnologias from "../tecnology/Tecnologias";
import Servicios from "../servicios/Servicios";
import Glasses from '../glasses/Glasses';
import Treatments from "../Treatments/Treatments";
import Contacto from '../contacto/Contacto';
import Footer from '../footer/Footer';
import PhotoReel from "../../components/photoReel/PhotoReel";


function Home() {
  return (
    <>
      <Header />
      <AboutMe infoEmpresa={infoEmpresa} />
      <Servicios services={services} />
      <Glasses glasses={glasses} />
      <Tecnologias tecnology={tecnology} />
      <Treatments treatments={treatments} />
      <PhotoReel photos={photos} />
      <Contacto />
      <Footer /> 
    </>
  );
}

export default Home;
