import '../styles/ProductoContainer.scss'
import {Productos} from '../components/Productos'
export const ProductosContainer = () => {
  return (
    <div className="container2">
        <Productos
        titulo ="Seguimiento de los servicios"
        subtitulo  ="Mantén el control de tu consumo de energía en tiempo real. Te ofrecemos una herramienta fácil de usar para que puedas monitorear tu consumo energetico a comparacion de las energias limpias."
        />

        <Productos
          titulo ="Calculadora"
        subtitulo  ="Descubre cuánto puedes ahorrar con nuestra calculadora de energía solar. Introduce tu consumo actual y te mostraremos el impacto económico y ambiental que puedes lograr al utilizar paneles solares."
        
        />
        <Productos
          titulo ="visualizacion de datos"
          subtitulo  ="Analiza tus datos energéticos de manera clara y sencilla. Con gráficos interactivos, podrás visualizar tu consumo de energía, la producción solar y el ahorro generado, todo en un solo lugar."
        />
      
    </div>
  )
}


