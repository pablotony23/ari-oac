import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const ContactForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    MySwal.fire({
      title: "¡Enviado!",
      text: "Su mensaje ha sido enviado, nos comunicaremos a la brevedad.",
      icon: "success",
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
    });

    try {
      const formData = new FormData(event.target);
    //   const response = await fetch("https://formsubmit.co/hrweek@arioac.com", {
      const response = await fetch("https://formsubmit.co/05498644fc0a192b12eee8fe081f1a95", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        event.target.reset();
      } else {
        MySwal.fire({
          title: "Error",
          text: "Hubo un problema al enviar el formulario. Inténtalo más tarde.",
          icon: "error",
        });
      }
    } catch (error) {
      MySwal.fire({
        title: "Error",
        text: "Hubo un problema al enviar el formulario. Inténtalo más tarde.",
        icon: "error",
      });
    }
  };
  return (
    <React.Fragment>
         <div className="contact-bg">
      <div className="container">
        <h1 className="contact-title">Contáctanos</h1>
        <p className="contact-desc">
           Si está interesado en nuestros eventos, promociones,
                      conferencias y desea conocer más detalles, deje un mensaje
                      aquí, le responderemos lo antes posible.
        </p>
       <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-row">
            <div className="contact-field">
              <label>Nombre Completo</label>
              <input type="text" name="name" placeholder="¿Cómo te llamas?" required />
            </div>
            <div className="contact-field">
              <label>Correo Electrónico</label>
              <input type="email" name="email" placeholder="tu@email.com" required />
            </div>
          </div>
          <div className="contact-row">
            <div className="contact-field">
              <label>Teléfono</label>
              <input type="tel" name="phone" placeholder="+1 (555) 123-4567" required />{" "}
            </div>
            <div className="contact-field">
              <label>Empresa</label>
              <input type="text" name="empresa" placeholder="Nombre de tu empresa" required />
            </div>
          </div>
          <div className="contact-row">
            <div className="contact-field field-full">
              <label>Cargo o Posición</label>
              <input type="text" name="puesto" placeholder="Tu rol en la empresa" required />
            </div>
          </div>
          <div className="contact-row">
            <div className="contact-field field-full">
              <label>Mensaje</label>
              <textarea name="mensaje" placeholder="Cuéntanos sobre tu proyecto, ideas o cómo podemos colaborar..." rows={4} required />
            </div>
          </div>
          <div className="center">
            <button className="contact-btn" type="submit">
              <span>✉️</span> Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
    </div>

      {/* VIDEO SECTION */}

      <div className="video-container">
        {/* Video de fondo */}
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/uploads/video.mp4" type="video/mp4" />
          <source src="/uploads/video.webm" type="video/webm" />
          <source src="/uploads/video.ogg" type="video/ogg" />
          Tu navegador no soporta el elemento de video.
        </video>
        {/* Fondo oscuro semitransparente */}
        <div className="video-overlay"></div>
        {/* Contenido */}
        <div className="content">
          <div className="title-container">
            <h3 className="title"></h3>
          </div>
          <div className="subheading">
            <h1 className="subheading-text"></h1>
          </div>
          <div className="description">
            <p className="description-text"></p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactForm;