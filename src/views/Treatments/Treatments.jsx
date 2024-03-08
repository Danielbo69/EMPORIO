import { useState } from "react";
import "./Treatments.css";
import Container from "../../components/container/Container";
import ModalView from "../../components/Modal/Modal";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Treatments({ treatments }) {
  const [show, setShow] = useState(false);
  const [dataTreatments, setDataTreatments] = useState(null);

  const showModal = (treatments) => {
    setDataTreatments(treatments);
    setShow(true);
  };

  return (
    <Container>
      <div className="tratamientos">
        {show ? (
          <ModalView
            location={true}
            data={dataTreatments}
            show={show}
            setShow={setShow}
          />
        ) : (
          ""
        )}
        {treatments.map((treatments) => (
          <div key={treatments.title} data-aos="zoom-in">
            <LazyLoadImage
              onClick={() => showModal(treatments)}
              src={treatments.image}
              alt={treatments.title}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Treatments;
