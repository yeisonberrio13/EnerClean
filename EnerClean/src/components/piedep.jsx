import '../styles/Footer2.scss'
import logo from '../assets/imagenes/svg/solar-panel-solid (1).svg'
export const piedep = () => {
  return (
    <div className="contenedorFooter2">
        <div className="subcontenedor">
            <div className="titulo">
                <div className="txt">
                    <h2>ENERCLEAN</h2>
                    <img src={logo} alt="" />
                </div>
                <p>Aprovechar el poder del solo es el primer paso hacia un futuro mas limpio, eficiente y renovable para todos </p>
            </div>
            <div className="contenido">
                <a href="">Grafica</a>
                <a href="/Calculadora">Calculadora</a>
                <a href="/informacion">Informacion</a>
            </div>
            <div className="links">
                <h4>SUSCRIBETA PARA RECIBIR LAS ULTIMAS NOTICIAS</h4>
                <div className="boton">
                    <input type="text" placeholder='correo electronico' />
                    <a href="">Suscribete</a>
                    <img src="" alt="" />
                </div>
                <div className="redes">
                    <a href=""><img src="" alt="" /></a>
                    <a href=""><img src="" alt="" /></a>
                    <a href=""><img src="" alt="" /></a>
                </div>

            </div>
        </div>
        <hr />
        <div className="Copyrig">
            <p>
            Copyrig ©  2024 EnerClean. Todos Los Derechos Reservados
            </p>
        </div>
    </div>
  )
}


