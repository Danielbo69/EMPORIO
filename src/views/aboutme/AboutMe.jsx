/* eslint-disable react/prop-types */
import "./AboutMe.css";
import { useState } from "react";
import Container from "../../components/container/Container";
import Buttons from "../../components/buttons/Buttons";
import titleAbout from "../../assets/img/Title.png";
import whoareTitle from "../../assets/img/Body Text.png";
import imgUbi from "../../assets/img/Duplicate.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import ModalView from "../../components/Modal/Modal";

function AboutMe({ infoEmpresa }) {
  const [show, setShow] = useState(false);

  const colorTitle = {
    color: "#ffc700",
  };

  return (
    <Container>
      <div className="contentAbout">
        {infoEmpresa.map((info, index) => (
          <div className="row aboutus" key={index}>
            {show ? <ModalView data={info} setShow={setShow} show={show}/> : ""}
            <div className="col col-md nuestrasOficinas" data-aos="fade-down">
              <div className="infoUbicacion">
                <div className="titleUbiHeader mb-2">
                  <h5 id="title" style={colorTitle}>
                    NUESTRAS OFICINAS
                  </h5>
                </div>
                {info.ubication.map((ubication, index) => (
                  <div className="mb-2" key={index}>
                    <div className="titleUbi">
                      <h6 id="title">
                        <FaMapMarkerAlt /> {ubication.title}
                      </h6>
                    </div>
                    <div className="descriptionUbi">
                      <p
                        className="mx-4"
                        style={{ letterSpacing: 2 }}
                        id="description"
                      >
                        {ubication.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-lg-flex d-none col-md imgUbicacion">
                <img src={imgUbi} alt={imgUbi} />
              </div>
            </div>
            <div className="col-md imagen">
              <div className="img">
                <img
                  className="d-flex w-100"
                  data-aos="flip-left"
                  src={info.imgCentral}
                  alt={info.imgCentral}
                />
              </div>
            </div>
            <div className="infoAbout col-md mx-lg-2 " data-aos="fade-down">
              <div className="title">
                <img
                  className="w-100 h-auto"
                  
                  src={titleAbout}
                  alt={titleAbout}
                />
              </div>
              <div className="descriptionAbout" id="description">
                <div className="whoare">
                  <img className="w-100" src={whoareTitle} alt={whoareTitle} />
                </div>
                <div className="whoareinfo">
                  <p>{info.description}</p>
                </div>
                <div className="button">
                  <Buttons setShow={setShow}>MÁS INFORMACIÓN</Buttons>
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
