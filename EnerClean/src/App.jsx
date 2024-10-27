import { Inicio } from './components/Inicio'
import { Header } from './components/Header'
import {Footer} from './components/Footer'
import './App.scss'

function App() {

  return (
    < >
    <body>
    <header>
      <Header/>  
    </header>
      <Inicio/>
      <footer>
          <Footer/>
      </footer>
      
    </body>
    </>
  )
}
export default App
