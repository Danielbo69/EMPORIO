/* eslint-disable react/prop-types */
import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { services } from "../../../data/data";
import { Nav } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import NavLink from "react-bootstrap/NavLink";
import NavItem from "react-bootstrap/NavItem";
import "./ViewServicios.css";

function ViewServicios() {
  const params = useParams();
  const location = useLocation();
  const filterServices = services.filter((service) => service.id == params.id);
  const locationId = location.pathname.split("/");
  const [activeBar, setActiveBar] = useState(params.id);

  const SideBar = ({ services }) => {
    const handleSelection = (title) => {
      setActiveBar(title);
    };
    return (
      <>
        <Nav
          className="sideBar col-12 w-100 d-lg-flex d-none justify-content-center"
          justify
          variant="tabs"
          defaultActiveKey={`Laboratorio Optico`}
        >
          <Nav.Item className="d-flex">
            {services.map((services) => (
              <Nav.Link
                key={services.title}
                active={activeBar == services.id}
                href={`/servicios/${services.id}`}
                onClick={() => handleSelection(services.title)}
              >
                {services.title}
              </Nav.Link>
            ))}
          </Nav.Item>
        </Nav>
      </>
    );
  };
  const DropdownBar = () => {
    return (
      <Dropdown as={NavItem}>
        <Dropdown.Toggle split as={NavLink} id="dropdown-split-basic">
          Menu{" "}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {services.map((services) => (
            <div key={services.title}>
              <Dropdown.Item href={`/servicios/${services.id}`}>
                {services.title}
              </Dropdown.Item>
            </div>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  };
  const ContentServices = ({ filterServices }) => {
    return (
      <div className="container col-12 mt-4 text-white">
        <div className="row">
          <div className="headerContentContainer col-12 text-center">
            <h5 className="d-flex">
              SERVICIOS{" "}
              <span className="px-2" style={{ color: "#ffc700" }}>
                {" "}
                |{" "}
              </span>
              <div className="d-inline">
                <div className="d-lg-none">
                  <DropdownBar filterServices={filterServices} />
                </div>
                <div className="d-lg-flex d-none">
                  <span>EMPORIO</span>
                </div>
              </div>
            </h5>
            <h1 className="d-flex">
              <div className="d-inline">
                <strong>{filterServices.title}</strong>
              </div>
            </h1>
          </div>
          <div className="bodyContentContainer col-12 my-4 text-justify">
            <span>{filterServices.description}</span>
          </div>
          {/* <div className="buttonsContent d-flex justify-content-end col">
            <button className="btn btn-primary m-1">más información</button>
          </div> */}
        </div>
      </div>
    );
  };

  return (
    <div className="servicesBody">
      <div className="row d-flex flex-column h-100">
        <div className="col d-flex align-items-center p-0">
          <SideBar services={services} />
        </div>
        <div className="col p-0">
          <div className="servicesContent">
            <div className="servicesView text-white">
              {filterServices && (
                <>
                  {filterServices.map((filterServices) => (
                    <div key={filterServices.id}>
                      <ContentServices filterServices={filterServices} />
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
