import "./Header.css";
import LogoEmporio from "../../assets/img/EMPORIUM LOGO.png";
import NavMenu from "../navbar/Navbar";

function Header() {
  return (
    <>
    <NavMenu />
      <div className="header">
        <div className="fondoHeader">
          <div className="contentHeader">
            <img
              src={LogoEmporio}
              alt={LogoEmporio}
              style={{ maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
