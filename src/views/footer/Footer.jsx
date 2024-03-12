import "./Footer.css";
import {
  FaMapMarkerAlt,
  FaLinkedin,
  FaTiktok,
  FaFacebookSquare,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function SocialMedia() {
  const icons = [
    {
      icon: <FaLinkedin fontSize={20} />,
    },
    {
      icon: <FaFacebookSquare fontSize={20} />,
    },
    {
      icon: <FaInstagram fontSize={20} />,
    },
    {
      icon: <FaTiktok fontSize={20} />,
    },
  ];
  return (
    <div className="d-flex justify-content-center align-items-center">
      {icons.map((icon, index) => (
        <a key={index} href="http://" target="_blank" rel="noopener noreferrer" style={{color: '#fff', margin: 10}}>
          {icon.icon}
        </a>
      ))}
    </div>
  );
}

function InfoAndContact() {
  const phones = [
    {
      name: "MONEDA 772",
      phone: "+56",
    },
    {
      name: "MACIVER 180",
      phone: "+56",
    },
    {
      name: "PUENTE ALTO",
      phone: "+56",
    },
  ];

  return (
    <div className="d-flex  contacto-footer">
      <div className="col-6 px-4 info-footer">
        <h3 id="title">EMPORIO</h3>
        <p id="description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti,
          consequuntur facere ratione voluptatem quaerat aliquam nihil animi
          dolores eligendi aspernatur accusamus nulla ab repellat harum?
          Accusantium enim harum quae tempore.
        </p>
      </div>
      <hr />
      <div className="col-6 px-4 contact-footer">
        <h3 id="title">CONTACTO</h3>
        <div className="d-flex">
          <FaMapMarkerAlt fontSize={20} />
          <p className="mx-1" id="description">
            Santiago de Chile
          </p>
        </div>
        <div className="d-flex">
          <IoMdMail fontSize={20} />
          <p className="mx-1" id="description">
            @gmail.com
          </p>
        </div>
        <div className="d-flex">
            <FaPhoneAlt fontSize={20} />
          <div className="col">
            {phones.map((phone, index) => (
              <div key={index}>
                <p className="mx-1" id="description">
                  {phone.name}, {phone.phone}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <InfoAndContact />
      <hr />
      <SocialMedia />
      <div className="d-flex justify-content-center align-items-center">
          <label id="title">
            © Emporio - Todos los derechos reservados - 2024
          </label>
      </div>
    </div>
  );
}

export default Footer;
