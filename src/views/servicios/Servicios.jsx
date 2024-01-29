import Container from "../../components/container/Container";
import "./Servicios.css";
import Card from "./card/Card";
import { useNavigate } from "react-router-dom";

function Servicios({ services }) {
  const navigate = useNavigate();

  const onPressServices = (e) => {
    navigate(`/servicios/${e.id}`);
  };

  return (
    <Container>
      <div className="services">
        <div>
          <h1 className="mb-4"> Nuestros Servicios</h1>
          <Card services={services} onPressServices={onPressServices} />
        </div>
      </div>
    </Container>
  );
}

export default Servicios;
