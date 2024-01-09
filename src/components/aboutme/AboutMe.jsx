/* eslint-disable react/prop-types */
import "./AboutMe.css";
import Container from "../container/Container";

function AboutMe({ infoEmpresa }) {
  const colorTitle = {
    color: "#ffc700",
  };
  return (
    <Container>
      {infoEmpresa.map((info, index) => (
        <div className="containerAbout" key={index}>
          <div className="info">
            <div className="description">
              <span className="mb-5 h5" style={colorTitle}>
                Sobre Nosotros
              </span>
              <h1 className="text-white text-left mb-3">¿Quienes Somos?</h1>
              <p className="text-white">{info.description}</p>
            </div>
            <div className="mision-and-vision">
              <div className="mision m-1">
                <h5 style={colorTitle}>Misión</h5>
                <p className="text-white">{info.mision}</p>
              </div>
              <div className="vision m-1">
                <h5 style={colorTitle}>Visión</h5>
                <p className="text-white">{info.vision}</p>
              </div>
            </div>
          </div>
          {/* <div className="img">
            <img className="w-100 h-auto" src={info.img} alt={info.img} />
          </div> */}
        </div>
      ))}
    </Container>
  );
}

export default AboutMe;
