import'../styles/NavBar2.scss'
// import { NavBar } from './NavBar'
import arrow from '../assets/imagenes/svg/arrow-right-solid.svg'
import logo from '../assets/imagenes/svg/solar-panel-solid (3).svg'
export  const NavBar2 = () => {
  return (
    <>
    <div className="navbar2">
        <nav>
            <ul>
                <li><a href="/prueba">Grafica</a></li>
                <li><a href="/Calculadora">Calculadora</a></li>
                <li><a href="/Informacion">Informacion</a></li>
                <div className='container'>
                    <a href="" id='contacto' className=''>Contactanos
                        <img className="arrow" src={arrow} alt="" href ="" />
                    </a> 
                </div>
            </ul>
        </nav>
    </div>
    </>
  )
}





