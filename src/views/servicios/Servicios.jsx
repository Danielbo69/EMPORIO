import Container from "../../components/container/Container";
import "./Servicios.css";
import Card from "./card/Card";
import { services } from "../../data/data";
import { useNavigate } from "react-router-dom";
import { MdMiscellaneousServices } from "react-icons/md";

function Servicios() {
  const navigate = useNavigate();

  const onPressServices = (e) => {
    navigate(`/servicios/${e.id}`, e);
  };

  return (
    <Container>
      <div className="services">
        <h1 className="mb-4"> Nuestros Servicios</h1>
        <Card services={services} onPressServices={onPressServices} />
      </div>
    </Container>
  );
}

export default Servicios;
