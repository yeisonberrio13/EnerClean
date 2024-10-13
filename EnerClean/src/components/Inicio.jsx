// import { Header } from "./Header";
import {Portada} from "./Portada"
import { Portada2 } from "./Portada2";
import {ProductosContainer} from "./ProductosContainer"
import { ImpactoContainer } from "./ImpactoContainer";
import { ContactoIndex } from "./ContactoIndex";
import { Footer } from "./footer";

export const Inicio = () => {
  return (
    <div className="containerMain">
        <main>
          <Portada/>
          <Portada2/>
          <ProductosContainer/>
          <ImpactoContainer/>
          <ContactoIndex/>
        </main>
      </div>
  )
}

