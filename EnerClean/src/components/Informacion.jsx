import { Header } from "./Header"
import { Footer } from "./Footer"
import '../styles/Informacion.scss'
import img from '../assets/imagenes/informacion/una.jpg'
import img1 from '../assets/imagenes/informacion/dos.jpg'
import img2 from '../assets/imagenes/informacion/panelsolar.png'

export const Informacion = () => {
  return (
    <div>
        <Header/>
        <section>
            <div className="info1">
                <div className="texto">
                    <h2>energía solar: el camino hacia un futurosostenible</h2>
                    <p>La energía solar es más que una fuente renovable,es una inversión en un futuro sostenible. Cada rayo desol que capturamos nos acerca a un mundo donde laenergía es limpia, accesible y beneficiosa para elplaneta y las futuras generaciones</p>
                </div>
                <div className="imageninfo1">
                        <img src= {img} alt="" />
                        <div className=""></div>
                        <div className=""></div>
                    </div>
            </div>
        </section>

        <section>
            <div className="info2">
                <img src={img1} alt="" />
                <div className="texto2">
                    <h3>¿Que es un panel solar?</h3>
                    <p>Son módulos fotovoltaicos que captan la energía solar, convirtiéndola en electricidad.estan
                    formados por celdas solares que a su vez contiene células creadas de materiales
                    semiconductores con el silicio que transforma la luz (fotones) en energía eléctrica (electrones)
                    Estos panes se conecta a una batería que almacena la electricidad generada y es esta se
                    encarga de que se utilice la energía creada. La luz separe los electrones que de modo que
                    forman una carga positiva y una negativa en la celular solar que genera una corriente electrica</p>
                </div>

            </div>
        </section>

        <section>
            <div className="info3">
                <div className="text3">
                    <h2>¿Como funciona un panel solar?</h2>
                    <p>
                        El funcionamiento de un panel solar se basa en el efecto fotovoltaico. Cuando la luz del sol (en forma de fotones) incide sobre las celdas solares, los electrones dentro del material semiconductor (silicio) se liberan de sus átomos. Este proceso crea una diferencia de carga dentro de la celda, generando una corriente eléctrica continua (DC).  
                    </p>    
                </div>
                <div className="imagen">
                        <img src={img2} alt="" />
                    </div>
            </div>
        </section>

        <section>
            <div className="video">
                <h4> aprenda qué es un panel solar y como funciona en este video sobre energia solar</h4>
                <div className="yt">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/K0zUOtVvFA8?si=CSgSlxIycGTiIyUB?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                <p>Los paneles fotovoltaicos toman la luz solar para generar una corriente directa, la cual es transferida y aprovechada por la mayoría de los equipos eléctricos. La energía generada pasa a través de un medidor, que la cuantifica. Luego continúa hacia una caja de suministro eléctrico, donde se distribuye hacia la red del lugar.</p>
            </div>
        </section>

        <section>
            <div className="info4">
                <h3>Ventajas de usar paneles solares</h3>

                <div className="contenidos">

                <div className="contenido">
                    <div>
                        <h2>Energía Limpia y Sostenible</h2>
                        <p id="contenido1">Los paneles solares generan electricidad sin emitir gases de efecto invernadero ni otroscontaminantes. Esto contribuye a reducir la huella de carbono y mitiga el impacto delcambio climático, ayudando a proteger el medio ambiente.</p>
                    </div>
                </div>

                <div className="contenido">
                    <div>
                        <h2>Reducción de Costos Energéticos</h2>
                        <p id="contenido2" >Aunque la instalación inicial de paneles solares puede ser costosa, a largo plazopermite un ahorro significativo en las facturas de electricidad. En muchos casos, los paneles solares generan más energía de la que el hogar necesita, lo que reduce la dependencia de la red eléctrica y, en algunos países, incluso permite vender el excedente de energía.</p>
                    </div>
                </div> 

                <div className="contenido">
                    <div>
                        <h2>Independencia Energética</h2>
                        <p id="contenido3">Con los paneles solares, los hogares y las empresas pueden generar su propia electricidad, disminuyendo su dependencia de proveedores eléctricos y reduciendo el impacto de fluctuaciones en los precios de la energía. En zonas remotas o rurales, donde el acceso a la red eléctrica es limitado o costoso, los paneles solares son una solución ideal.</p>
                    </div>
                </div> 
                    
                </div> 
            </div>
        </section>




        <footer className="ft">
            <Footer/>
        </footer>
    </div>
  )
}


