import logo from '../assets/imagenes/svg/solar-panel-solid (2).svg'
import fb from '../assets/imagenes/svg/facebook-brands-solid.svg'
import ig from '../assets/imagenes/svg/instagram-brands-solid (1).svg'
import yt from '../assets/imagenes/svg/youtube-brands-solid.svg'
import '../styles/footerBlanco.scss'
export  const FooterBlanco = () => {
  return (
    <div className="contene">
        <div className="subcontenedor2">
            <div className="title2">
                <div className="text">
                    <h2>ENERCLEAN</h2>
                    <img src={logo} alt="" />
                </div>
                <p>Aprovechar el poder del sol es el primer paso hacia un futuro más limpio, eficiente y renovable para todos</p>
            </div>
            <div className="contenido2">
                <a href="">Grafica</a>
                <a href="">Calculadora</a>
                <a href="">Informacion</a>
            </div>
            <div className="links">
                <h4>SUSCRIBETE PARA RECIBIR LAS ULTIMAS NOTICIAS</h4>
                <div className="boton">
                    <input type="text" placeholder=' correo electronico' />
                    <a href="">Suscribete</a>
                    <img src="" alt="" />
                </div>
                <div className="redes">
                    {/* <a href=""><img alt={fb} /></a>
                    <a href=""><img alt={ig} /></a>
                    <a href=""><img alt={yt} /></a> */}
                </div>
            </div>
        </div>
        <div className="Copyrig">
            <p>
            Copyrig ©  2024 EnerClean. Todos Los Derechos Reservados
            </p>
        </div>
      
    </div>
  )
}


