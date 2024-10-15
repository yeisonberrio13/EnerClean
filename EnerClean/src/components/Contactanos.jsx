import { Header } from "./Header";
import { Footer } from "./Footer";
import React, { useState } from "react";
import logo from '../assets/imagenes/svg/solar-panel-solid (1).svg';
import '../styles/Contactanos.scss';
import img from '../assets/imagenes/svg/check-solid.svg'

export const Contactanos = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    asunto: '',
    mensaje: '',
    aceptado: false,
  });

  const [mensajeEnviado, setMensajeEnviado] = useState(false); // Estado para controlar el mensaje de éxito

  // Manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Validar y manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, apellido, email, asunto, mensaje, aceptado } = formData;

    // Validación de campos vacíos
    if (!nombre || !apellido || !email || !asunto || !mensaje || !aceptado) {
      alert('Por favor, completa todos los campos y acepta las políticas de privacidad.');
      return;
    }

    // Mostrar mensaje de éxito
    setMensajeEnviado(true);
    alert('Formulario enviado con éxito.');

    // Limpiar los campos del formulario después del envío
    setFormData({
      nombre: '',
      apellido: '',
      email: '',
      asunto: '',
      mensaje: '',
      aceptado: false,
    });
  };

  return (
    <div className="contactocontainer">
      <Header />
      <section>
        <div className="uno">
          <div className="texto">
            <h2>CONTACTO</h2>
            <p>
              ¿Tienes preguntas sobre cómo aprovechar la energía solar o deseas más información sobre nuestros servicios? No dudes en contactarnos. Estamos aquí para ayudarte a resolver tus dudas y guiarte en el camino hacia un consumo de energía más limpio y eficiente.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="formulario">
          <div className="contenido1">
            <h2>EnerClean</h2>
            <p>
              ¿Tienes preguntas sobre cómo aprovechar la energía solar o deseas más información sobre nuestros servicios? No dudes en contactarnos. Estamos aquí para ayudarte a resolver tus dudas y guiarte en el camino hacia un consumo de energía más limpio y eficiente.
            </p>
            <img src={logo} alt="" />
          </div>

          <div className="contenido2">
            <h2>Formulario</h2>
            <form onSubmit={handleSubmit}>
              <div className="datos1">
                <div>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    value={formData.apellido}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="datos2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Correo Electrónico"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="asunto"
                    placeholder="Asunto"
                    value={formData.asunto}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="datos3">
                <textarea
                  name="mensaje"
                  placeholder="Mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                ></textarea>
                <div className="confirmacion">
                  <input
                    type="checkbox"
                    name="aceptado"
                    checked={formData.aceptado}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="">Acepta las políticas de privacidad</label>
                </div>
                <button type="submit">Enviar</button>
              </div>
            </form>

            {/* Mostrar mensaje de éxito si el formulario se envió correctamente */}
            {mensajeEnviado && <p className="mensaje-exito">Formulario enviado con éxito.</p>}
          </div>
        </div>
      </section>

      <footer className="ftr">
        <Footer />
      </footer>
    </div>
  );
};
