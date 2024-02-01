import "./Glasses.css";
import Container from "../../components/container/Container";
import CardImage from "../../components/cardImage/CardImage";

function Glasses({ glasses }) {
  const colorTitle = {
    color: "#ffc700",
  };
  
  return (
    <Container>
      <h1 className="mb-4" id="title" style={colorTitle}>Lentes</h1>
      <div className="glasses">
        <div className="row m-0 w-100">
          <CardImage glasses={glasses} />
        </div>
      </div>
    </Container>
  );
}

export default Glasses;
