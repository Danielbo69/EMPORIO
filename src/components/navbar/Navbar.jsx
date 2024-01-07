/* eslint-disable no-undef */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navbar.css";
import ImgLogo from '../../assets/img/LOGO BLANCO.png';

function NavMenu() {
  return (
    <>
      <Navbar expand="sm" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={ImgLogo} alt={ImgLogo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link>Quienes Somos</Nav.Link>
                <Nav.Link>Lentes</Nav.Link>
                <NavDropdown
                  title="Servicios"
                  id={`offcanvasNavbarDropdown-expand-sm`}
                >
                  <NavDropdown.Item>Laboratorio Optico</NavDropdown.Item>
                  <NavDropdown.Item>Servicio de Montaje</NavDropdown.Item>
                  <NavDropdown.Item>Servicio de Stock</NavDropdown.Item>
                  <NavDropdown.Item>Clarity Vision</NavDropdown.Item>
                  <NavDropdown.Item>Teñido Solido o Degrade</NavDropdown.Item>
                  <NavDropdown.Item>Servicio de Prisma</NavDropdown.Item>
                </NavDropdown>
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
