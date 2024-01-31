import { useState, useRef, useEffect } from "react";
import "./Whatsapp.css";
import { IoLogoWhatsapp, IoIosClose } from "react-icons/io";
import Tooltip from "react-bootstrap/Tooltip";
import Overlay from "react-bootstrap/Overlay";

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
      <a
        ref={target}
        href="https://api.whatsapp.com/send?phone=5661017123"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-wsp"
      >
        <IoLogoWhatsapp />
      </a>
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
