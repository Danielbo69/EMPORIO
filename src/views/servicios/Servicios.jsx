import Container from "../../components/container/Container";
import "./Servicios.css";
import Card from "./card/Card";

function Servicios({ services }) {

  const colorTitle = {
    color: "#ffc700",
  };

  return (
    <Container>
      <div className="services">
        <div>
          <h1 className="mb-4" id="title" style={colorTitle}>
            {" "}
            Nuestros Servicios
          </h1>
          <Card services={services} />
        </div>
      </div>
    </Container>
  );
}

export default Servicios;
