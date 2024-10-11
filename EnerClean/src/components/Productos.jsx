import arrow from '../assets/imagenes/svg/arrow_right_alt_24dp_3B5978_FILL0_wght400_GRAD0_opsz24.svg'

export const Productos = ({titulo,subtitulo}) => {
  return (
    <section>
      <div className="contenedor">
        <h2>{titulo}</h2>
        <p>{subtitulo}</p>
        <div className="flecha">
          <a href="">  
          <img src={arrow} alt="" className="flecha"/>
        </a>        

        </div>
        
      </div>
      
    </section>
   
    
  )
}





