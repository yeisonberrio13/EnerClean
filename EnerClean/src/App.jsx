import { Inicio } from './components/Inicio'
import { Header } from './components/Header'
import { Footer } from './components/footer'
import {Calculadora} from './components/CALCULADORA/Calculadora'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import { Informacion } from './components/INFORMACION/Informacion'

function App() {

  return (
    < >
       <Header/>
        {/* <footer>
          <Footer/>
        </footer> */}
       
       {/* <Inicio/> */}
      <BrowserRouter>
        
        <Routes>
          <Route path="/Informacion" element ={<Informacion/>} /> 
          <Route path="/Inicio" element ={<Inicio/>} /> 
          <Route path="/Calculadora" element ={<Calculadora/>} /> 
        </Routes>  
      </BrowserRouter>
       <footer>
          <Footer/>
        </footer>

      
     
      


    </>
  )
}
export default App
