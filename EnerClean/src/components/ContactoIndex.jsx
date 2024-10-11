import img from '../assets/imagenes/portada3/benjamin-jopen-p2GuLUu79Rg-unsplash.jpg'
import '../styles/ContactoIndex.scss'
import arrow from '../assets/imagenes/svg/arrow_right_alt_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg'

export  const ContactoIndex = () => {
  return (
    <div className="informacion">
        <img src={img} alt="" />
        <div className="contenido">
            <h2>
            La energía solar es una oportunidad para transformar nuestro futuro, capturando cada rayo de sol hacia un mundo más limpio y sostenible.
            </h2>
            <p>¿Tienes alguna pregunta o te gustaría saber más sobre cómo la energía solar puede beneficiar tu hogar o negocio? Estamos aquí para ayudarte. Envíanos tus dudas, comentarios o solicitudes, y uno de nuestros expertos en energía renovable te responderá lo antes posible.</p>
            <div className="boton">
                <a href="">Empieza Hoy 
                
                </a>
            </div>

        </div>
      
    </div>
  )
}


