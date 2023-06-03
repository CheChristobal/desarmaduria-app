import React from 'react';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <h2>Contacto</h2>
      <p>¡Contáctanos para más información!</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" placeholder="Tu nombre" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Tu email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" rows="4" placeholder="Escribe tu mensaje" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default ContactSection;
