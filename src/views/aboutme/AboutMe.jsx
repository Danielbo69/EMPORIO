/* eslint-disable react/prop-types */
import "./AboutMe.css";
import Container from "../../components/container/Container";
import Buttons from "../../components/buttons/Buttons";
import titleAbout from "../../assets/img/Title.png";
import whoareTitle from "../../assets/img/Body Text.png";
import imgUbi from "../../assets/img/Duplicate.png"
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
            <div className="col col-md nuestrasOficinas">
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
              <div className="col-md imgUbicacion">
                <img src={imgUbi} alt={imgUbi} />
              </div>
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
            <div className="infoAbout col-md mx-lg-2">
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
        ))}
      </div>
    </Container>
  );
}

export default AboutMe;
