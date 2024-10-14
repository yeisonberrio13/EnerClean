import { NavBar2 } from './NavBar2'
import '../styles/Header2.scss'
import logo from '../assets/imagenes/svg/solar-panel-solid (3).svg'

export  const Header2 = () => {
  return (
    <header className="header2">
        <div className="logo">
            <a href="/inicio"><img src={logo} alt=""  /> </a>
            <a href="/inicio" id="titulo">EnerClean</a>
            <NavBar2/>
        </div>
    </header>
  )
}

