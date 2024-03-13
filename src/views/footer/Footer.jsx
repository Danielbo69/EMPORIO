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

const date = new Date();
const newYear = date.getFullYear();

function SocialMedia() {
  const icons = [
    {
      icon: <FaLinkedin fontSize={20} />,
      enlace:
        "https://www.linkedin.com/company/emporio-laboratorio-%C3%B3ptico/",
    },
    {
      icon: <FaFacebookSquare fontSize={20} />,
      enlace:
        "https://www.facebook.com/profile.php?id=61555745737910&mibextid=ZbWKwL",
    },
    {
      icon: <FaInstagram fontSize={20} />,
      enlace:
        "https://www.instagram.com/emporiolab.cl?igsh=MWtmcHVkZmZwdDZw&utm_source=qr",
    },
    {
      icon: <FaTiktok fontSize={20} />,
      enlace: "https://www.tiktok.com/@emporiolab?_t=8kd7VkXZtB7&_r=1",
    },
  ];
  return (
    <div className="footer-icons d-flex justify-content-center align-items-center">
      {icons.map((socialMedia, index) => (
        <a
          key={index}
          href={socialMedia.enlace}
          target="_blank"
          rel="noopener noreferrer"
          className="icons"
          style={{ color: "#fff", margin: 10 }}
        >
          {socialMedia.icon}
        </a>
      ))}
    </div>
  );
}

function InfoAndContact() {
  const phones = [
    {
      name: "MONEDA 772",
      phone: "(+56)956145574",
    },
    {
      name: "MACIVER 180",
      phone: "(+56)949286172",
    },
    {
      name: "PUENTE ALTO",
      phone: "(+56)922199009",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-md px-4 info-footer">
          <h3 id="title">EMPORIO</h3>
          <br />
          <p id="description">
            En Emporio Laboratorio nos dedicamos a ofrecer soluciones ópticas de
            calidad excepcional. Con un enfoque en la precisión y la innovación,
            nuestro equipo altamente capacitado trabaja para brindar lentes
            oftálmicos personalizados que se adapten a las necesidades
            específicas de cada cliente. Utilizando tecnología de vanguardia y
            materiales de primera calidad, garantizamos una visión clara y
            cómoda en cada par de lentes que producimos. Nuestro compromiso con
            la excelencia se extiende más allá de la fabricación de lentes,
            también ofrecemos servicios de asesoramiento y atención al cliente
            excepcionales para asegurarnos de que cada persona que entre en
            nuestro laboratorio se sienta bien atendida y satisfecha con su
            experiencia. En Emporio Laboratorio, nos enorgullece ser el destino
            confiable para todas las necesidades ópticas.
          </p>
        </div>
        <hr className="clearfix w-100 d-md-none" />
        <div className="col-md-6 col-md px-4 contact-footer">
          <h3 id="title">CONTACTO</h3>
          <br />
          <div className="d-flex">
            <div className="row">
              {phones.map((phone, index) => (
                <div className="col-md 6" key={index}>
                  <div className="d-flex">
                    <FaMapMarkerAlt fontSize={20} />
                    <p className="mx-1" id="description">
                      {phone.name},
                    </p>
                  </div>
                  <div className="d-flex">
                    <FaPhoneAlt fontSize={20} />
                    <p className="mx-1" id="description">
                      {phone.phone}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              <div className="d-flex">
                <IoMdMail fontSize={20} />
                <p className="mx-1" id="description">
                  ventasemporiolab@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <InfoAndContact />
      <hr />
      <SocialMedia />
      <div className="d-flex justify-content-center align-items-center">
        <label id="title">
          Copyright © 2024 - {newYear} &nbsp; <strong style={{color: '#ffc700'}}>|</strong>
          &nbsp; Emporio - Todos los derechos reservados
        </label>
      </div>
    </footer>
  );
}

export default Footer;
