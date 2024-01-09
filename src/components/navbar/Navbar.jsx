/* eslint-disable no-undef */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navbar.css";
import ImgLogo from "../../assets/img/LOGO BLANCO.png";
import ImgLogoName from "../../assets/img/EMPORIUM LOGO.png";

function NavMenu() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary navbar-dark">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={ImgLogo} alt={ImgLogo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                <img style={{width: 200}} src={ImgLogoName} alt={ImgLogoName} />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link>Lentes</Nav.Link>
                <Nav.Link>Servicios</Nav.Link>
                <Nav.Link>Encuentranos</Nav.Link>
                <Nav.Link>Contacto</Nav.Link>
              </Nav>
              {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavMenu;
