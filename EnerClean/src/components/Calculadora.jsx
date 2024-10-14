import { Header2 } from './Header2'
import check from '../assets/imagenes/svg/check-solid.svg'
import '../styles/Calculadora.scss'
import React, { useState } from 'react'
import { FooterBlanco } from './FooterBlanco'


export const Calculadora = () => {
  const [consumo, setConsumo] = useState('') // Mantener el input vacío como string
  const [ahorro, setAhorro] = useState(0) // Estado para el ahorro calculado
  const [graficaHeight, setGraficaHeight] = useState('0%'); // Estado para la altura de la gráfica
  const [mostrarResultados, setMostrarResultados] = useState(false); // Controlar si se muestra la gráfica y resultados

  // Función para manejar el cambio en el input (actualiza en tiempo real)
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setConsumo(newValue);

    // Si el campo de entrada está vacío, restablecer los resultados
    if (!newValue) {
      setAhorro(0); // Resetear el ahorro
      setGraficaHeight('0%'); // Resetear la gráfica
      setMostrarResultados(false); // Ocultar la gráfica y los resultados
    }
  };

  // Función para calcular el ahorro y actualizar la gráfica
  const calcularAhorro = (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    const consumoNumerico = parseFloat(consumo) || 0;
    const kWhAhorro = consumoNumerico * 0.7; // Ejemplo: 70% de ahorro
    setAhorro(kWhAhorro);

    // Limitar la altura de la gráfica al máximo del contenedor
    const height = Math.min(kWhAhorro, 300); // Usar 300px como altura máxima
    setGraficaHeight(`${height}px`); // Usar px para controlar mejor la altura
    setMostrarResultados(true); // Mostrar los resultados y la gráfica
  };

  return (
    <div>
      <Header2 />
      <div className="calculadora">
        <div className="inputs">
          <div className="ingreso">
            <label htmlFor="">Ingrese su consumo Mensual</label>
            <input
              type="number"
              value={consumo}
              onChange={handleInputChange} // Actualiza el valor en tiempo real
            />
            <div className="botn">
              <button onClick={calcularAhorro}>
                Calcular 
                <img src={check} alt="" />
              </button>
            </div>
          </div>

          <div className="resultados">
            <div className="user">
              <p>Consumo sin paneles solares</p>
              <div className="numero">
                {/* Mostrar el consumo mensual en tiempo real */}
                <p id="nresult">{consumo ? parseFloat(consumo).toFixed(1) : '-'} <span>/mes</span></p>              
              </div>
              <p id="consumo">Consumo energético</p>
            </div>

            <div className="datos">
              <p>Consumo con paneles solares</p>
              <div className="numero">
                {/* Mostrar el ahorro en kWh solo cuando se presiona "Calcular" */}
                <p id="nresult">{mostrarResultados ? (ahorro).toFixed(2) : '-'} <span>/mes</span></p>
                
              </div>
              <p id ="consumo" > Ahorro energético a partir de energía solar</p>
              <div 
                className="grafica"
                style={{
                  height: mostrarResultados ? graficaHeight : '0%' // La gráfica solo se muestra después de calcular      
                }}
              >
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBlanco/>          

    </div>
  );
};



