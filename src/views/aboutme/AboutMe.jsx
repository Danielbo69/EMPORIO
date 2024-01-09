/* eslint-disable react/prop-types */
import "./AboutMe.css";
import Container from "../../components/container/Container";
import imgCenter from "../../assets/img/Black & White.png";

function AboutMe({ infoEmpresa }) {
  const colorTitle = {
    color: "#ffc700",
  };
  return (
    <Container>
      <div className="container">
        <div className="contentAbout">
          {infoEmpresa.map((info, index) => (
            <div className="aboutus" key={index}>
              <div className="nuestrasOficinas mx-3">
                <div className="infoUbicacion">
                  <h3>Nuestras Oficinas</h3>
                  {info.ubication.map((ubication, index) => (
                    <div className="mb-2" key={index}>
                      <div className="titleUbi">
                        <h6>{ubication.title}</h6>
                      </div>
                      <div className="descriptionUbi">
                        <p className="mx-4">{ubication.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="imgUbicacion"
                  style={{ backgroundColor: "#ffa50082" }}
                >
                  imagen
                </div>
              </div>
              <div className="imagen">
                <div className="img">
                  <img
                    className="w-100 h-100"
                    src={imgCenter}
                    alt={imgCenter}
                  />
                </div>
              </div>
              <div className="infoAbout">
                <div className="title">title</div>
                <div className="description">description</div>
                <div className="button">button</div>
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
      </div>
    </Container>
  );
}

export default AboutMe;
