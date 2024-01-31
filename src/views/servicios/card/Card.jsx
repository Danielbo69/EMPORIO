/* eslint-disable react/prop-types */
import "./Card.css";

function Card({ services, onPressServices}) {

  return (
    <div className="containerCard" data-aos="zoom-in">
      {services.map((servicios) => (
        <div className="cardApp" key={servicios.id}>
          <div className="box">
            <span className="title" id="title">{servicios.title}</span>
            <div className="description">
              <span onClick={() => onPressServices(servicios)}>Más información</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
