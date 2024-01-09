import { useParams } from "react-router-dom";
import { services} from "../../../data/data";
import "./ViewServicios.css";

function ViewServicios() {
  const { id } = useParams();
  const filterServices = services.filter((service) => service.id == id);
  console.log(filterServices);
  return (
    <div style={{ height: "100vh", color: "#fff" }}>
      {filterServices && (
        <div>
          {filterServices.map((filterServices) => (
            <div className="containerViewServices" key={filterServices.id}>
              <div className="navServices mb-5 mt-5 p-5 d-flex justify-content-between">
                {services.map((navServices) => (
                  <div className="" key={navServices.title}>
                    <p>{navServices.title}</p>
                  </div>
                ))}
              </div>
              <div className="options">
              <div className="subOptions">
                subOptions
              </div>
                
              </div>
              <div className="contentServices">
                infoServices
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewServicios;
