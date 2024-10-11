import { Header } from './components/Header'
import { Portada } from './components/Portada'
import { Portada2 } from './components/Portada2'
import { ProductosContainer } from './components/ProductosContainer'
import { ImpactoContainer } from './components/ImpactoContainer'
import { ContactoIndex } from './components/ContactoIndex'
import { Footer } from './components/footer'
import './App.scss'

function App() {

  return (
    < >
    <body>
      <div className="containerMain">
        <header>
          <Header/>  
        </header>
        <main>
          <Portada/>
          <Portada2/>
          <ProductosContainer/>
          <ImpactoContainer/>
          <ContactoIndex/>
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    </body>
    </>
  )
}
export default App
