/* eslint-disable react/prop-types */
import "./AboutMe.css";
import ImageAbout from "../../assets/img/mapa-chile-ubi.png";

function AboutMe({ infoEmpresa }) {
  const textJustify = {
    textAlign: "justify",
    fontFamily: "Arial",
    fontSize: "0.89rem",
    fontWeight: "bold",
  };
  const colorTitle = {
    color: "#ffc700",
  };

  return (
    <div className="aboutme">
      <div className="fondoAbout">
        <div className="contentAbout">
          {infoEmpresa.map((info, index) => (
            <div className="row h-100 align-items-center" key={index}>
              <div className="col-lg-8">
                <span className="mb-3 h5 text-dark">
                  Sobre Nosotros
                </span>
                <h1 className="text-left mb-3" style={colorTitle}>¿QUIENES SOMOS?</h1>
                <div className="col-sm m-2">
                  <div className="card-body">
                    <p className="text-dark" style={textJustify}>{info.description}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="card col-sm m-2">
                    <div className="card-header">
                      <h5 style={colorTitle}>Misión</h5>
                    </div>
                    <div className="card-body">
                      <footer className="footer">
                        <cite className="text-dark" title={info.mision}  style={textJustify}>
                          {info.mision}
                        </cite>
                      </footer>
                    </div>
                  </div>
                  <div className="card col-sm m-2">
                    <div className="card-header">
                      <h5 style={colorTitle}>Visión</h5>
                    </div>
                    <div className="card-body">
                      <footer className="footer">
                        <cite className="text-dark" title={info.vision} style={textJustify}>
                          {info.vision}
                        </cite>
                      </footer>
                    </div>
                  </div>
                </div>
              </div>

              <div className="imgAbout col-sm">
                <img
                  className="w-100 h-100"
                  src={ImageAbout}
                  alt={ImageAbout}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
