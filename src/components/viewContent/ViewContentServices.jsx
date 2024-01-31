import DropdownBar from "../dropdown/DropdownBar";
import Card from "react-bootstrap/Card";

function ViewContentServices({ filter, data, handleSelection }) {
  return (
    <div className="container col-12 mt-5 text-white">
      <div className="row">
        <div className="headerContentContainer col-12 text-center">
          <h5 className="d-flex">
            <span id="title">SERVICIOS </span>
            <span className="px-2" style={{ color: "#ffc700" }}>
              {" "}
              |{" "}
            </span>
            <div className="d-inline">
              <div className="d-lg-none">
                <DropdownBar data={data} handleSelection={handleSelection} />
              </div>
              <div className="d-lg-flex d-none">
                <span id="title">EMPORIO</span>
              </div>
            </div>
          </h5>
        </div>
        <div className="bodyContentContainer col-12 my-4 text-justify">
          <Card className="card">
            <Card.Body className="cardBody">
              <Card.Title className="title" id="title">
                  {filter.title}
                </Card.Title>
              <Card.Text id="description">{filter.description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ViewContentServices;
