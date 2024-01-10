/* eslint-disable react/prop-types */
import "./AboutMe.css";
import Container from "../../components/container/Container";
import Buttons from "../../components/buttons/Buttons";
import titleAbout from "../../assets/img/Title.png";
import whoareTitle from "../../assets/img/Body Text.png";
import { FaMapMarkerAlt } from "react-icons/fa";


function AboutMe({ infoEmpresa }) {
  const colorTitle = {
    color: "#ffc700",
  };
  return (
    <Container>
      <div className="contentAbout">
        {infoEmpresa.map((info, index) => (
          <div className="row aboutus" key={index}>
            <div className="col-md nuestrasOficinas">
              <div className="infoUbicacion">
                <div className="titleUbiHeader mb-2">
                  <h5 id="title" style={colorTitle}>
                    NUESTRAS OFICINAS
                  </h5>
                </div>
                {info.ubication.map((ubication, index) => (
                  <div className="mb-2" key={index}>
                    <div className="titleUbi">
                      <h6 id="title"><FaMapMarkerAlt /> {ubication.title}</h6>
                    </div>
                    <div className="descriptionUbi">
                      <p
                        className="mx-4"
                        style={{ letterSpacing: 2 }}
                        id="descriptionAbout"
                      >
                        {ubication.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-md imgUbicacion"></div>
            </div>
            <div className="col-md imagen">
              <div className="img">
                <img
                  className="d-flex w-100"
                  src={info.imgCentral}
                  alt={info.imgCentral}
                />
              </div>
            </div>
            <div className="col-md infoAbout mx-2">
              <div className="title">
                <img
                  className="w-100 h-auto"
                  src={titleAbout}
                  alt={titleAbout}
                />
              </div>
              <div className="descriptionAbout" id="descriptionAbout">
                <div className="whoare">
                  <img className="w-100" src={whoareTitle} alt={whoareTitle} />
                </div>
                <div className="whoareinfo">
                  <p>{info.description}</p>
                </div>
                <div className="button">
                  <Buttons>MÁS INFORMACIÓN</Buttons>
                </div>
              </div>
            </div>
          </div>
          // <div className="containerAbout" key={index}>
          //   <div className="info">
          //     <div className="description">
          //       <span className="mb-5 h5" style={colorTitle}>
          //         Sobre Nosotros
          //       </span>
          //       <h1 className="text-white text-left mb-3">¿Quienes Somos?</h1>
          //       <p className="text-white">{info.description}</p>
          //     </div>
          //     <div className="mision-and-vision">
          //       <div className="mision m-1">
          //         <h5 style={colorTitle}>Misión</h5>
          //         <p className="text-white">{info.mision}</p>
          //       </div>
          //       <div className="vision m-1">
          //         <h5 style={colorTitle}>Visión</h5>
          //         <p className="text-white">{info.vision}</p>
          //       </div>
          //     </div>
          //   </div>
          // </div>
        ))}
      </div>
    </Container>
  );
}

export default AboutMe;
