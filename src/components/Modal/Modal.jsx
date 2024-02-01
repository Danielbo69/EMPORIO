import Modal from "react-bootstrap/Modal";

function ModalView({ data, show, setShow, location }) {
  const colorTitle = {
    color: "#ffc700",
  };
  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <div key={data.title}>
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title" >
            <h4 id="title">{data.title}</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {data.mision ? (
            <div className="col">
              <strong id="title" style={colorTitle}>
                MISIÓN
              </strong>
              <p id="description">
                {data.mision}
              </p>
            </div>
          ) : (
            <div className="col">
              <p id="description">{data.description}</p>
            </div>
          )}
          <br />
          {data.vision ? (
            <div className="col">
              <strong id="title" style={colorTitle}>
                VISIÓN
              </strong>
              <p id="description">{data.vision}</p>
            </div>
          ) : (
            ""
          )}
        </Modal.Body>
      </div>
    </Modal>
  );
}

export default ModalView;
