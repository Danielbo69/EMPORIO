import { useState, useRef } from "react";
import "./Contacto.css";
import Container from "../../components/container/Container";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function Contacto() {
  const [formContact, setFormContact] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [phoneContact, setPhoneContact] = useState("");

  const Ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormContact({
      ...formContact, 
      'phone': phoneContact
    })
    if(formContact.name === "" || formContact.email === "" || formContact.phone === "" || formContact.phone === undefined || formContact.subject === "" || formContact.message === ""){
      Swal.fire({
        icon: "error",
        title: "Algo anda mal!",
        text: "Todavia hay campos vacios",
      });
    } else {
      emailjs.sendForm().then(
        (result) => {
          if(result.text === "OK") {
            // Reset Form State
            setFormContact({
              name: "",
              email: "",
              phone: "",
              subject: "",
              message: "",
            })
            setPhoneContact("")
            Swal.fire({
              icon: "success",
              position: "top-end",
              title: "¡CORREO ENVIADO!",
              text: "Se ha enviado correctamente...",
            });
          }
        }, (error) => {
          console.log(error.text)
        }
        )
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormContact({
      ...formContact,
      [name]: value,
    });
  };

  return (
    <Container>
      <div className="contacto" data-aos="fade-up">
        <h1 className="mb-4">CONTACTO</h1>
        <form className="content-form" ref={Ref} onClick={handleSubmit}>
          <div className="name">
            <span className="lead">NOMBRE</span>
            <input
              className="form-control"
              type="text"
              name="name"
              value={formContact.name}
              onChange={handleChange}
            />
          </div>
          <div className="email">
            <span className="lead">CORREO</span>
            <input
              className="form-control"
              type="email"
              name="email"
              value={formContact.email}
              onChange={handleChange}
            />
          </div>
          <div className="phone">
            <span className="lead">TELEFONO</span>
            <PhoneInput
              className="form-control"
              name="phone"
              value={formContact.phone}
              onChange={setPhoneContact}
            />
          </div>
          <div className="subject">
            <span className="lead">ASUNTO</span>
            <input
              className="form-control"
              type="text"
              name="subject"
              value={formContact.subject}
              onChange={handleChange}
            />
          </div>
          <div className="message">
            <span className="lead">Mensaje</span>
            <input
              className="form-control"
              type="text"
              name="message"
              id="message"
              value={formContact.message}
              onChange={handleChange}
            />
          </div>
          <div className="buttom">
            <button className="btn-contact" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default Contacto;
