/* eslint-disable react/prop-types */
import "./ViewServicios.css";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { services } from "../../../data/data";
import SideBar from "../../../components/sidebar/SideBar";
import ViewContentServices from "../../../components/viewContent/ViewContentServices";

function ViewServicios() {
  const params = useParams();
  const navigate = useNavigate();
  const filterServices = services.filter((service) => service.id == params.id);
  const [activeBar, setActiveBar] = useState(params.id);

  const handleSelection = (id) => {
    setActiveBar(id);
    navigate(`/servicios/${id}`)
  };

  return (
    <div className="servicesBody">
      <div className="row d-flex flex-column h-100">
        <div className="col d-flex align-items-center p-0">
          <SideBar services={services} activeBar={activeBar} handleSelection={handleSelection}/>
        </div>
        <div className="col p-0">
          <div className="servicesContent">
            <div className="servicesView text-white">
              {filterServices && (
                <>
                  {filterServices.map((filter) => (
                    <div key={filter.id}>
                      <ViewContentServices filter={filter} data={services} handleSelection={handleSelection}/>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewServicios;
