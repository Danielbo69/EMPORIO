/* eslint-disable react/prop-types */
import "./Card.css";

function Card({ services, onPressServices}) {

  return (
    <div className="containerCard" data-aos="zoom-in">
      {services.map((servicios) => (
        <div className="cardApp" key={servicios.id}>
          <div className="box">
            <span className="title">{servicios.title}</span>
            <div className="description">
            {/* <strong>{servicios.description}</strong> */}
              <span onClick={() => onPressServices(servicios)}>Más información</span>
            </div>
          </div>
        </div>
      ))}
    </div>
    // <>
    //   {services.map((servicios) => (
    //     <div className="cardApp">
    //       <div className="box">
    //         {/* <span className="title">{servicios.title}</span> */}
    //         <div>
    //           <strong>JOE WATSON SBF</strong>
    //           <p>0000 000 000 0000</p>
    //           <span>VALID</span> <span>01/28</span>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </>
  );
}

export default Card;
