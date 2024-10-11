import img1 from '../assets/imagenes/portada/david-cristian-325638-unsplash.jpg'
import img2 from '../assets/imagenes/portada/image (1).jpg'
import arrow from '../assets/imagenes/svg/arrow_right_alt_24dp_3B5978_FILL0_wght400_GRAD0_opsz24.svg'
import '../styles/portada.scss'
export const Portada = () => {
  return (
   <section>
    <div className="portada">
        <div className="texto">
            <p>Creemos en un futuro más limpio y sostenible. A través de soluciones de energía solar, te ayudamos a reducir tu consumo eléctico y a proteger el medio ambiente.</p>
            <div className="boton">
                <a href="">Empieza Hoy 
                <img className="arrow" src={arrow} alt="" />
                </a>
            </div>
            
        </div>
        <div className="visuales">
            <img className='img1' src={img1} alt="" />
            <img src={img2} alt=""  id='img2' />
            {/* <p>Unete a la transformación <br/>Energética</p> */}
            
        </div>

    </div>
   </section>
  )
}


