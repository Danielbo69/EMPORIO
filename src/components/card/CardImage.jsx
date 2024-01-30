import "./CardImage.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardImage({ glasses, onPressGlasses }) {
  return (
    <>
      {glasses.map((lens) => (
        <div
          className="mb-2 col-md-6 col-lg-4 col-xl-4"
          key={lens.id}
        >
          <Card className="card">
            <Card.Img
              className="img"
              variant="top"
              src={lens.image}
              alt={lens.title}
            />
            <Card.Body className="cardBody">
              <Card.Title className="title">{lens.title}</Card.Title>
              <Card.Text className="description">{lens.description}</Card.Text>
              <div className="w-100 d-flex justify-content-end">
                <Button className="button" variant="primary" onClick={() => onPressGlasses(lens)}>Más información</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
}

export default CardImage;
