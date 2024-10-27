import LinesChart from "./LinesChart"
import { PieChart } from "./PieChart"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { AreaChart } from "./AreaChart"
import CombinedEnergyChart from "./CombinedEnergyChart"
import '../styles/prueba.scss'
import TrendLineChart from "./TrendLineChart"



export  const Prueba2 = () => {
  return (
      // <h1></h1>
    <div>
      <Header/>
      {/* <p>ejemplo 1 <b>grafico de lineas basico</b> </p> */}
        <div className="containergrap">
          <div>
            
              <div className="lineschart">
                <LinesChart/>
              </div>
          </div>
          <div className="piechart">
            <PieChart/>
          </div>
        </div>



        <div className="containergrap">
          <div className="areachart">
            <AreaChart/>
          </div>
          <div className="trendline">
          <TrendLineChart/>
          </div>
        </div>
        <div className="combined">
          <CombinedEnergyChart/>
        </div>
        
        <footer className="ft">
          <Footer/>
        </footer>
        
        
    </div>
  )
}


