import "./Tecnologias.css";
import Container from "../../components/container/Container";

export default function Tecnologias({ tecnology }) {
  const colorTitle = {
    color: "#ffc700",
  };
  return (
    <Container>
      <div className="tecnologias">
        <h1 className="mb-5" id="title" style={colorTitle}>
          Tecnologias
        </h1>
        {tecnology.map((tecnology) => (
          <div className="row" key={tecnology.title}>
            <div className="col-md-6 mb-4 d-flex align-items-center justify-content-end ">
              <h5>{tecnology.title}</h5>
            </div>
            <div className="col-md-6 mb-4">
              <label style={{ textAlign: "justify" }}>
                {tecnology.description}
              </label>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
