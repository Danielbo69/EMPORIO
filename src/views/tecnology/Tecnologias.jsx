import "./Tecnologias.css";
import Container from "../../components/container/Container";

export default function Tecnologias({ tecnology }) {
  const colorTitle = {
    color: "#ffc700",
  };
  return (
    <div className="tecnologias">
      <Container>
        <h1 className="mb-5" id="title" style={colorTitle}>
          Tecnologias
        </h1>
      </Container>
      {tecnology.map((tecnology) => (
        <div className="row" key={tecnology.title}>
          <div className="col-lg-6 mb-4 title " data-aos="fade-right">
            <h5 id="title">{tecnology.title}</h5>
          </div>
          <div className="col-lg-6 mb-4">
            <label id="description" style={{ textAlign: "justify", padding: 20}}>
              {tecnology.description}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}
