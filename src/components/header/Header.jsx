import "./Header.css";
import LogoEmporio from "../../assets/img/EMPORIUM LOGO.png";
import {LazyLoadImage} from "react-lazy-load-image-component"

function Header() {
  return (
    <div className="header">
      <div className="contentHeader">
        <LazyLoadImage src={LogoEmporio} alt={LogoEmporio} style={{ maxWidth: "100%" }} />
      </div>
    </div>
  );
}

export default Header;
