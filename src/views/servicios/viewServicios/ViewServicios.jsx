import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { services } from "../../../data/data";
import { Nav } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import NavLink from "react-bootstrap/NavLink";
import NavItem from "react-bootstrap/NavItem";
import "./ViewServicios.css";

function ViewServicios() {
  const { id } = useParams();
  const location = useLocation();
  const filterServices = services.filter((service) => service.id == id);
  const locationId = location.pathname.split("/")
  const [activeServices, setActiveServices] = useState("");
  
  
  const SideBar = ({ services }) => {
    function navActivo(id, title) {
      if(locationId[2] === id) {
        setActiveServices(title)
      }
    } 
    console.log(activeServices)
    return (
      <>
        <Nav
          className=" sideBar w-100 d-md-flex d-none justify-content-center"
          justify
          variant="tabs"
          // defaultActiveKey={activeServices}
        >
          <Nav.Item className="d-flex">
            {services.map((services) => (
              <>
                <Nav.Link
                  key={services.title}
                  // eventKey={activeServices}
                  // href={`/servicios/${services.id}`}
                  onClick={navActivo(services.id, services.title)}
                >
                  {services.title}
                </Nav.Link>
              </>
            ))}
          </Nav.Item>
        </Nav>
      </>
    );
  };
  const DropdownBar = () => {
    return (
      <Dropdown as={NavItem}>
        <Dropdown.Toggle
          split
          as={NavLink}
          id="dropdown-split-basic"
        ></Dropdown.Toggle>

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
  const ViewContainer = ({ children }) => {
    return <div className="ContainerView">{children}</div>;
  };

  const ContentServices = ({ filterServices }) => {
    return (
      <div className="container mt-5 text-white">
        <div className="row">
          <div className="headerContentContainer col-12 text-center">
            <h5 className="d-flex">
              SERVICIO{" "}
              <span className="px-2" style={{ color: "#ffc700" }}>
                {" "}
                |{" "}
              </span>
              <div className="d-inline">
                <div className="d-md-none">
                  <DropdownBar filterServices={filterServices} />
                </div>
                <div className="d-md-flex d-none">
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
          <div className="buttonsContent d-flex justify-content-end col">
            <button className="btn btn-primary m-1">más información</button>
            <button className="btn btn-success m-1">Comprar</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <ViewContainer>
      {filterServices && (
        <>
          <SideBar services={services} />
          {filterServices.map((filterServices) => (
            <div key={filterServices.id}>
              <ContentServices filterServices={filterServices} />
            </div>
          ))}
        </>
      )}
    </ViewContainer>
  );
}

export default ViewServicios;
