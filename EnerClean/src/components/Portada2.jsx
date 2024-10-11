import img from'../assets/imagenes/svg/solar-panel-solid (1).svg'
import '../styles/Portada2.scss'
export const Portada2 = () => {
  return (
    <section>
        <div className="container">
            <div className="titulo">
                <h2>Descubre el poder la <br /> energía solar</h2>
                <img src={img} alt="" />
            </div>
            <div className="texto">
                <p>LA ENERGIA SOLAR ES MUCHO MÁS QUE UNA ALTERNATIVA, ES EL FUTURO EN TUS FACTURAS Y CUIDAR DEL PLANETA. ¿TE IMAGINAS TRANSFORMAR LA LUZ SOLAR EN ENERGIA PARA TU HOGAR? DESCUBRE CÓMO LOS PANELES SOLARES PUEDEN CAMBIAR LA FORMA EN QUE CONSUMES ENERGIA Y COMO PUEDE CONTRIBUIR A UN FUTURO MÁS SOSTENIBLE.</p>
                
            </div>

        </div>
    </section>
  )
}


