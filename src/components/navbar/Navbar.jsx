/* eslint-disable no-undef */
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import ImgLogo from "../../assets/img/logo.png"

function NavMenu() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar expand="xxl" className="bg-body-tertiary navbar-dark">
        <Container fluid>
          <Navbar.Brand
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            <img src={ImgLogo} alt={ImgLogo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xxl`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-xxl`}
            aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
            placement="end"
          >
            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-xxl`}
              ></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link
                id="title"
                  onClick={() => navigate("/")}
                >
                  INICIO
                </Nav.Link>
                <Nav.Link
                id="title"
                  onClick={() => navigate("/servicios/1")}
                >
                  SERVICIOS
                </Nav.Link>
                <Nav.Link
                id="title"
                  onClick={() => navigate("/lentes/0")}
                >
                  LENTES
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavMenu;
