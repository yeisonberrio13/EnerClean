import { Inicio } from './components/Inicio'
import {Calculadora} from './components/Calculadora'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import { Informacion } from './components/Informacion'
import { Prueba2 } from './components/prueba2'
import { Contactanos } from './components/Contactanos'

function App() {

  return (
    < >
    
      <BrowserRouter>
        
        <Routes>
          <Route path="/Informacion" element ={<Informacion/>} /> 
          <Route path="/Inicio" element ={<Inicio/>} /> 
          <Route path="/Calculadora" element ={<Calculadora/>} />
          <Route  path="/prueba" element ={<Prueba2/> }  />
          <Route path="/Contactanos" element={<Contactanos/>}/>
        </Routes>  
      </BrowserRouter>
    </>
  )
}
export default App
