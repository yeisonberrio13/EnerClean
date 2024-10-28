import '../styles/ImpactoContainer.scss'
import img from '../assets/imagenes/impacto/image (1).png'
import img2 from '../assets/imagenes/portada/mcasa-con-techos-solares-8_42197575_20230419202315.jpg'
import img3 from '../assets/imagenes/portada/dsc07112-768x427.jpeg'
import img4 from '../assets/imagenes/portada/Emcali.jpg'
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
                        
                        <a href="https://www.elcolombiano.com/medellin/en-medellin-nacio-la-primera-comunidad-energetica-del-pais-IF23401977" target='blank'>

                            <img src={img2} alt="" />
                        </a>
                    </div>
                    <h5>19 de Abril del 2023</h5>
                    <h2>Por primera vez, barrio de Medellín le venderá energía solar al país</h2>
                    <p>La comunidad solar de El Salvador es desarrollada entre la Universidad EIA, EPM, la empresa Erco, la comercializadora de energía solar NEU y el Reino Unido, y busca diseñar e implementar un modelo barrial de generación de energía a través de paneles solares. </p>
                </div>
                <div className="contenido2">
                    <div className="imagenes">
                        <a href="https://www.barranquilla.gov.co/mi-barranquilla/inicia-la-era-de-energia-solar-en-los-hogares-de-barranquilla" target='blank' >
                            <img src={img3} alt=""/>
                        </a>
                    </div>
                    <h5>3 de Agosto del 2023</h5>
                    <h2>Inicia la era de energía solar en los hogares de Barranquilla</h2>
                    <p>Con este proyecto, sumado a la autogeneración de energía en edificios públicos y el piloto de parque eólico costa afuera, Barranquilla ratifica su apuesta en la generación de energías renovables.</p>
                </div>
                <div className="contenido3">
                    <div className="imagenes">

                        
                        <a href="https://www.minenergia.gov.co/es/sala-de-prensa/noticias-index/emcali-y-el-fenoge-llevan-energ%C3%ADa-solar-a-2000-hogares-vulnerables-de-cali/" target='blank'>
                            <img src={img4} alt=""/>
                        </a>
                    </div>
                    <h5>19 de diciembre del 2023</h5>
                    <h2>EMCALI y el FENOGE llevan energía solar a 2.000 hogares vulnerables de Cali</h2>
                    <p><a href=""></a>EMCALI y el FENOGE, con apoyo del MinEnergía, lanzan el programa "Hogares Energéticamente Sostenibles" para instalar paneles solares en cerca de 2.000 hogares del oriente de Cali.</p>
                </div>
            </div>
      
        </div>
    </section>
  )
}
