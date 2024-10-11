import '../styles/ImpactoContainer.scss'
import img from '../assets/imagenes/impacto/image (1).png'
export  const Impacto = () => {
  return (
    <section>
        <div className="impacto">
            <div className="titulos">
                <h2>Historia de impacto en <br /> latinoamerica</h2>
                <p>explorar cómo la energía solar está siendo aplicada en el mundo real. Te mostramos una variedad de proyectos y casos de éxito donde los paneles solares han mejorado la calidad de vida, reducido costos energéticos y promovido un estilo de vida más sostenible. Desde hogares individuales hasta comunidades enteras, descubre cómo la energía limpia está transformando nuestra manera de consumir electricidad.</p>
            </div>
            <div className="contenidos">
                <div className="contenido1">
                    <div className="imagenes">
                        <img src={img} alt="" />
                    </div>
                    <h5>FECHAS DEL 2024</h5>
                    <h2>EMCALI y el FENOGE llevan energía solar a 2.000 hogares vulnerables de Cali</h2>
                    <p>EMCALI y el FENOGE, con apoyo del MinEnergía, lanzan el programa "Hogares Energéticamente Sostenibles" para instalar paneles solares en cerca de 2.000 hogares del oriente de Cali.</p>
                </div>
                <div className="contenido2">
                    <div className="imagenes">
                        <img src={img} alt="" />
                    </div>
                    <h5>FECHAS DEL 2024</h5>
                    <h2>EMCALI y el FENOGE llevan energía solar a 2.000 hogares vulnerables de Cali</h2>
                    <p>EMCALI y el FENOGE, con apoyo del MinEnergía, lanzan el programa "Hogares Energéticamente Sostenibles" para instalar paneles solares en cerca de 2.000 hogares del oriente de Cali.</p>
                </div>
                <div className="contenido3">
                    <div className="imagenes">
                        <img src={img} alt="" />
                    </div>
                    <h5>FECHAS DEL 2024</h5>
                    <h2>EMCALI y el FENOGE llevan energía solar a 2.000 hogares vulnerables de Cali</h2>
                    <p>EMCALI y el FENOGE, con apoyo del MinEnergía, lanzan el programa "Hogares Energéticamente Sostenibles" para instalar paneles solares en cerca de 2.000 hogares del oriente de Cali.</p>
                </div>
            </div>
      
        </div>
    </section>
  )
}
