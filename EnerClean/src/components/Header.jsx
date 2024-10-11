import { NavBar } from "./NavBar"
import '../styles/Header.scss'
import logo from '../assets/imagenes/svg/solar-panel-solid (1).svg'

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <a href="http://google.com/"><img src={logo} alt=""  /> </a>
      <a href="" id="titulo">EnerClean</a>
      <NavBar/>
      </div>
    </header>
  )
}


