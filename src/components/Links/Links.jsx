import { useState, useEffect } from "react";
import "./Links.css";
import {
  IoLogoWhatsapp,
  IoIosClose,
  IoIosLink,
  IoMdLink,
} from "react-icons/io";
import Tooltip from "react-bootstrap/Tooltip";
import Overlay from "react-bootstrap/Overlay";
import { Link } from "react-router-dom";

function Links() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showTooltipLinks, setShowTooltipLinks] = useState(false);

  setTimeout(function () {
    setShowTooltip(!showTooltip);
  }, 10000);

  useEffect(() => {
    if (!showTooltip) {
      setShowTooltip(!showTooltip);
    }
  }, [showTooltip]);

  return (
    <>
      <div
        className="btn-links"
        onClick={() => setShowTooltipLinks(!showTooltipLinks)}
      >
        <IoIosLink />
      </div>
      <Overlay
        show={showTooltip}
        placement="left"
        target={() => document.querySelector(".btn-links")}
      >
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            <div className="d-flex">
              <span style={{ textAlign: "left" }}>
                ¡Toma tú solicitud en línea!
              </span>
              <div className="icon-close">
                <span onClick={() => setShowTooltip(false)}>
                  <IoIosClose />{" "}
                </span>
              </div>
            </div>
          </Tooltip>
        )}
      </Overlay>
      <Overlay
        show={showTooltipLinks}
        placement="top"
        target={() => document.querySelector(".btn-links")}
      >
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            <div className="d-flex flex-column  h-100">
              <span style={{ width: "120px" }}>
                <div className="links">
                  <Link
                    className="d-flex justify-content-between align-items-center my-2 mx-1"
                    to="https://beacons.ai/emporiolab"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoWhatsapp
                      style={{ fontSize: "20px", color: "#25d366" }}
                    />
                    <label>Whatsapp</label>
                  </Link>
                </div>
                <div className="links">
                  <Link
                    className="d-flex justify-content-between align-items-center my-2 mx-1"
                    to="https://emporioorder.azurewebsites.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoMdLink style={{ fontSize: "20px", color: "#212529" }} />
                    <label>Pedidos</label>
                  </Link>
                </div>
              </span>
            </div>
          </Tooltip>
        )}
      </Overlay>
    </>
  );
}
export default Links;
