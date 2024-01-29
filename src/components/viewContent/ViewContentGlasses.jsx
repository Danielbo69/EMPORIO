import DropdownBar from "../dropdown/DropdownBar";
import './ViewContentGlasses.css'
import Card from "react-bootstrap/Card";

function ViewContentGlasses({ filter, data, handleSelection }) {
  return (
    <div className="container text-white">
      <div className="row">
        <div className="headerContentContainer text-center">
          <h5 className="d-flex">
            LENTES{" "}
            <span className="px-2" style={{ color: "#ffc700" }}>
              {" "}
              |{" "}
            </span>
            <div className="d-inline">
              <div className="d-lg-none">
                <DropdownBar data={data} handleSelection={handleSelection} />
              </div>
              <div className="d-lg-flex d-none">
                <span>EMPORIO</span>
              </div>
            </div>
          </h5>
          <h1 className="d-flex">
            <div className="d-inline">
              <strong>{filter.title}</strong>
            </div>
          </h1>
        </div>
        {filter.subData.map((subData) => (
          <div
            className="bodyContentContainer col-12 text-justify"
            key={subData.title}
          >
            <Card className="card">
            {/* <Card.Img
              className="img"
              variant="top"
              src={lens.image}
              alt={lens.title}
            /> */}
            <Card.Body className="cardBody">
              <Card.Title className="title">{subData.title}</Card.Title>
              <Card.Text className="description">{subData.description}</Card.Text>
            </Card.Body>
          </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewContentGlasses;
