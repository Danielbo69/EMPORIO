/* eslint-disable react/prop-types */
import "./ViewServicios.css";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { services } from "../../../data/data";
import SideBar from "../../../components/sidebar/SideBar";
import ViewContentServices from "../../../components/viewContent/ViewContentServices";
import Spinner from "../../../components/spinner/Spinner";

function ViewServicios({ spinner }) {
  const params = useParams();
  const navigate = useNavigate();
  const filterServices = services.filter((service) => service.id == params.id);
  const [activeBar, setActiveBar] = useState(params.id);

  const handleSelection = (id) => {
    setActiveBar(id);
    navigate(`/servicios/${id}`);
  };

  return (
    <>
      {spinner ? (
        <Spinner />
      ) : (
        <div className="servicesBody">
          <div className="servicesContent row d-flex flex-column">
            <div className="d-flex align-items-center p-0">
              <SideBar
                services={services}
                activeBar={activeBar}
                handleSelection={handleSelection}
              />
            </div>
            <div className="col p-0">
              <div className="servicesData">
                {filterServices.map((filter) => (
                  <div className="text-white" key={filter.id}>
                    <ViewContentServices
                      filter={filter}
                      data={services}
                      handleSelection={handleSelection}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ViewServicios;
