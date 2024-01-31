import { Nav } from "react-bootstrap";
import "./SideBar.css";

const ServicesBar = ({ services, activeBar, handleSelection }) => {
  return (
    <>
      <Nav
        className="sideBar col-12 w-100 d-lg-flex d-none justify-content-center"
        justify
        variant="tabs"
      >
        <Nav.Item className="d-flex">
          {services.map((services) => (
            <Nav.Link
              key={services.title}
              active={activeBar == services.id}
              onClick={() => handleSelection(services.id)}
            >
              <label id="title" style={{cursor: 'pointer'}}>{services.title}</label>
            </Nav.Link>
          ))}
        </Nav.Item>
      </Nav>
    </>
  );
};

const GlassesBar = ({ glasses, activeBar, handleSelection }) => {
  return (
    <>
      <Nav
        className="sideBar col-12 w-100 d-lg-flex d-none justify-content-center"
        justify
        variant="tabs"
      >
        <Nav.Item className="d-flex">
          {glasses.map((glasses) => (
            <Nav.Link
              key={glasses.title}
              active={activeBar == glasses.id}
              onClick={() => handleSelection(glasses.id)}
            >
              <label id="title" style={{cursor: 'pointer'}}>{glasses.title}</label>
            </Nav.Link>
          ))}
        </Nav.Item>
      </Nav>
    </>
  );
};

function SideBar({ services, glasses, activeBar, handleSelection }) {
  return (
    <>
      {glasses ? (
        <GlassesBar
          glasses={glasses}
          activeBar={activeBar}
          handleSelection={handleSelection}
        />
      ) : (
        ""
      )}
      {services ? (
        <ServicesBar
          services={services}
          activeBar={activeBar}
          handleSelection={handleSelection}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default SideBar;
