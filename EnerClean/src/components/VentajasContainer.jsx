import { Ventajas } from "./Ventajas"
// import { Ventajas } from "./Ventajas"

export const VentajasContainer = () => {
  return (
    <div className="ventajas">

      <Ventajas
            texto1 = "Energía Limpia y Sostenible"
            texto2 = "Los paneles solares generan electricidad sin emitir gases de efecto invernadero ni otroscontaminantes. Esto contribuye a reducir la huella de carbono y mitiga el impacto delcambio climático, ayudando a proteger el medio ambiente."
        />

      <Ventajas
            texto1 = "Reducción de Costos Energéticos"
            texto2 = "Aunque la instalación inicial de paneles solares puede ser costosa, a largo plazopermite un ahorro significativo en las facturas de electricidad. En muchos casos, los paneles solares generan más energía de la que el hogar necesita, lo que reduce la dependencia de la red eléctrica y, en algunos países, incluso permite vender el excedente de energía."
        />

        <Ventajas
            texto1 = "Independencia Energética:"
            texto2 = "Con los paneles solares, los hogares y las empresas pueden generar su propia electricidad, disminuyendo su dependencia de proveedores eléctricos y reduciendo el impacto de fluctuaciones en los precios de la energía. En zonas remotas o rurales, donde el acceso a la red eléctrica es limitado o costoso, los paneles solares son una solución ideal."
        />

        <Ventajas
            texto1 = "Bajo Mantenimiento:"
            texto2 = "Los sistemas de paneles solares requieren poco mantenimiento. Con una limpieza y revisión periódica (por lo general, una o dos veces al año), pueden seguir funcionando eficientemente durante más de 25 años."
        />

    </div>
  )
}


