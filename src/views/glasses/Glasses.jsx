import "./Glasses.css";
import Container from "../../components/container/Container";
import CardImage from "../../components/card/CardImage";
import { useNavigate } from "react-router-dom";

function Glasses({ glasses }) {
  const colorTitle = {
    color: "#ffc700",
  };
  const navigate = useNavigate();

  const onPressGlasses = (e) => {
    navigate(`/lentes/${e.id}`);
  };
  return (
    <Container>
      <h1 className="mb-4" id="title" style={colorTitle}>Lentes</h1>
      <div className="glasses">
        <div className="row m-0 w-100">
          <CardImage glasses={glasses} onPressGlasses={onPressGlasses} />
        </div>
      </div>
    </Container>
  );
}

export default Glasses;
