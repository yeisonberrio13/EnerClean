import { NavBar } from "./NavBar"
import '../styles/Header.scss'
import logo from '../assets/imagenes/svg/solar-panel-solid (1).svg'

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <a href="/inicio"><img src={logo} alt=""  /> </a>
      <a href="/inicio" id="titulo">EnerClean</a>
      <NavBar/>
      </div>
    </header>
  )
}


