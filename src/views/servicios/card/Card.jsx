/* eslint-disable react/prop-types */
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ services }) {
  return (
    <div className="containerCard" data-aos="zoom-in">
      {services.map((servicios) => (
        <div className="cardApp" key={servicios.id}>
          <div className="box">
            <span className="title" id="title">
              {servicios.title}
            </span>
            <div className="description">
              <Link to={`/servicios/${servicios.id}`}>Más información</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
