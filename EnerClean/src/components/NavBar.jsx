import '../styles/NavBar.scss'
import arrow from '../assets/imagenes/svg/arrow_right_alt_24dp_3B5978_FILL0_wght400_GRAD0_opsz24.svg'
export const NavBar = () => {
  return (
    <>
      <div className="navbar">
      <nav>
        <ul>
            <li><a href="">Grafica</a></li>
            <li><a href="">Calculadora</a></li>
            <li><a href="">Informacion</a></li>
            <div className='container'>
              <a href="" id='contacto' className=''>Contactanos
              <img className="arrow" src={arrow} alt="" />
                
                </a> 
              
            </div>
          </ul>
        </nav>
      </div>
    </>
  )
}

