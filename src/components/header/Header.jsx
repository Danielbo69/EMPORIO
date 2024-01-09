import "./Header.css";
import LogoEmporio from "../../assets/img/EMPORIUM LOGO.png";

function Header() {
  return (
    <>
    
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
