import "./CardImage.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CardImage({ glasses }) {
  return (
    <>
      {glasses.map((lens) => (
        <div className="mb-2 col-md-6 col-lg-4 col-xl-4" key={lens.id} data-aos="zoom-out-right">
          <Card className="card">
            <Card.Img
              className="img"
              variant="top"
              src={lens.image}
              alt={lens.title}
            />
            <Card.Body className="cardBody">
              <Card.Title className="title" id="title">
                {lens.title}
              </Card.Title>
              <Card.Text className="description" id="description">
                {lens.description}
              </Card.Text>
              <div className="w-100 d-flex justify-content-end">
                <Link to={`/lentes/${lens.id}`}>
                  <Button
                    className="button"
                    variant="primary"
                  >
                    Más información
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
}

export default CardImage;
