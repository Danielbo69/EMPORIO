/* eslint-disable react/prop-types */
import "./AboutMe.css";
import { useState } from "react";
import Container from "../../components/container/Container";
import Buttons from "../../components/buttons/Buttons";
import titleAbout from "../../assets/img/Title.png";
import whoareTitle from "../../assets/img/Body Text.png";
import imgUbi from "../../assets/img/Duplicate.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";

function AboutMe({ infoEmpresa }) {
  const [show, setShow] = useState(false);

  const colorTitle = {
    color: "#ffc700",
  };

  const MyModal = ({ info }) => {
    return (
      <>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              SOBRE NOSOTROS
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="col">
              <strong style={colorTitle}>MISIÓN</strong>
              <p>{info.mision}</p>
            </div>
            <br />
            <div className="col">
              <strong style={colorTitle}>VISIÓN</strong> <p>{info.vision}</p>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  };

  return (
    <Container>
      <div className="contentAbout">
        {infoEmpresa.map((info, index) => (
          <div className="row aboutus" key={index}>
            {show ? <MyModal info={info} /> : ""}
            <div className="col col-md nuestrasOficinas">
              <div className="infoUbicacion" data-aos="fade-down">
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
                        id="descriptionAbout"
                      >
                        {ubication.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-lg-flex d-none col-md imgUbicacion" data-aos="fade-down">
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
              <div className="descriptionAbout" id="descriptionAbout">
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
