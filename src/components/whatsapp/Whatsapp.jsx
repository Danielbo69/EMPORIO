import { useState, useRef, useEffect } from "react";
import "./Whatsapp.css";
import { IoLogoWhatsapp, IoIosClose } from "react-icons/io";
import Tooltip from "react-bootstrap/Tooltip";
import Overlay from "react-bootstrap/Overlay";
import { Link } from "react-router-dom";

function Whatsapp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const target = useRef(null);

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
      <Link
        ref={target}
        to="https://beacons.ai/emporiolab"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-wsp"
      >
        <IoLogoWhatsapp />
      </Link>
      <Overlay
        target={target.current}
        show={showTooltip == true}
        placement="left"
      >
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            <div className="d-flex">
              <span style={{ textAlign: "left" }}>
                ¡Escribenos para más información!
              </span>
              <div className="icon">
                <span onClick={() => setShowTooltip(!showTooltip)}>
                  <IoIosClose />{" "}
                </span>
              </div>
            </div>
          </Tooltip>
        )}
      </Overlay>
    </>
  );
}
export default Whatsapp;
