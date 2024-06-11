import styles from './TablaMontecarlo.module.css'

let colorPedido = '#ffeee6';
let colorDemanda = '#cce6ff'
let colorStock = '#ccffcc'
let colorStockOut = '#ff9999'
let colorDemora = '#ffe6ff'
let colorCostos = '#ffe0b3'
let colorPide = '#ccffff'
let rndColor = '#f2f2f2'

export function TablaMontecarlo({data, sticky= true, header}) {

    return (
        <table className={styles.table}>
            <caption>{header}</caption>
            <thead className={sticky ? styles.stickyTopHeader : ""}>
                <tr>
                    <th colSpan={1} className={styles.headerSticky}></th>
                    <th colSpan={2}></th>
                    <th colSpan={12} style={{backgroundColor: colorPedido}}>PEDIDO</th>
                    <th colSpan={1} style={{backgroundColor: colorStock}}></th>
                    <th colSpan={2} style={{backgroundColor: colorDemanda}}>DEMANDA</th>
                    <th colSpan={1} style={{backgroundColor: colorStock}}></th>
                    <th colSpan={1} style={{backgroundColor: colorStockOut}}></th>
                    <th colSpan={1} style={{backgroundColor: colorPide}}></th>
                    <th colSpan={3} style={{backgroundColor: colorDemora}}>DEMORA PROVEEDOR</th>
                    <th colSpan={4} style={{backgroundColor: colorCostos}}>COSTOS SEMANA</th>
                    <th colSpan={4}></th>
                </tr>
                <tr>
                    <th className={styles.headerSticky}>SEMANA</th>
                    <th>EN CAMINO</th>
                    <th>LLEGA?</th>
                    <th style={{backgroundColor: colorPedido}}>RND</th>
                    <th style={{backgroundColor: colorPedido}}>BICI 1</th>
                    <th style={{backgroundColor: colorPedido}}>RND</th>
                    <th style={{backgroundColor: colorPedido}}>BICI 2</th>
                    <th style={{backgroundColor: colorPedido}}>RND</th>
                    <th style={{backgroundColor: colorPedido}}>BICI 3</th>
                    <th style={{backgroundColor: colorPedido}}>RND</th>
                    <th style={{backgroundColor: colorPedido}}>BICI 4</th>
                    <th style={{backgroundColor: colorPedido}}>RND</th>
                    <th style={{backgroundColor: colorPedido}}>BICI 5</th>
                    <th style={{backgroundColor: colorPedido}}>CANT DAÑADAS</th>
                    <th style={{backgroundColor: colorPedido}}>TOTAL DAÑADAS</th>
                    <th style={{backgroundColor: colorStock}}>STOCK INICIAL</th>
                    <th style={{backgroundColor: colorDemanda}}>RND</th>
                    <th style={{backgroundColor: colorDemanda}}>DEMANDA</th>
                    <th style={{backgroundColor: colorStock}}>STOCK FINAL</th>
                    <th style={{backgroundColor: colorStockOut}}>S/O</th>
                    <th style={{backgroundColor: colorPide}}>PIDE?</th>
                    <th style={{backgroundColor: colorDemora}}>RND</th>
                    <th style={{backgroundColor: colorDemora}}>DEMORA</th>
                    <th style={{backgroundColor: colorDemora}}>SEMANA LLEGADA</th>
                    <th style={{backgroundColor: colorCostos}}>KO</th>
                    <th style={{backgroundColor: colorCostos}}>KM</th>
                    <th style={{backgroundColor: colorCostos}}>KS</th>
                    <th style={{backgroundColor: colorCostos}}>K SEMANA</th>
                    <th>K ACUM</th>
                    <th>PROMEDIO</th>
                </tr>
            </thead>
            <tbody>
            {data.map((item, idx) => {
                return (
                    <tr key={idx}>
                        <td>{item.semana}</td>
                        <td>{item.enCamino ? "SI" : "NO"}</td>
                        <td>{item.llega ? "SI" : "NO"}</td>
                        <td>{
                            item.llega ? item.rndBici1.toFixed(2) : "-"
                        }</td>
                        <td>{
                            !item.llega ? "-" : item.bici1 ? "SI" : "NO"
                        }</td>
                        <td>{
                            item.llega ? item.rndBici2.toFixed(2) : "-"
                        }</td>
                        <td>{
                            !item.llega ? "-" : item.bici2 ? "SI" : "NO"
                        }</td>
                        <td>{
                            item.llega ? item.rndBici3.toFixed(2) : "-"
                        }</td>
                        <td>{
                            !item.llega ? "-" : item.bici3 ? "SI" : "NO"
                        }</td>
                        <td>{
                            item.llega ? item.rndBici4.toFixed(2) : "-"
                        }</td>
                        <td>{
                            !item.llega ? "-" : item.bici4 ? "SI" : "NO"
                        }</td>
                         <td>{
                            item.llega ? item.rndBici5.toFixed(2) : "-"
                        }</td>
                        <td>{
                            !item.llega ? "-" : item.bici5 ? "SI" : "NO"
                        }</td>
                        <td>{!item.llega? "-" : item.cantidadDanadas}</td>
                        <td>{item.totalDanadas}</td>
                        <td>{item.stockInicial}</td>
                        <td>{item.rndDemanda.toFixed(2)}</td>
                        <td>{item.cantidad}</td>
                        <td>{item.stockFinal}</td>
                        <td>{item.faltante}</td>
                        <td>{item.pide ? "SI" : "NO"}</td>
                        <td>{!item.pide ? "-" : item.rndPedido.toFixed(2)}</td>
                        <td>{item.demora ?? "-"}</td>
                        <td>{item.semanaLlegada ?? "-"}</td>
                        <td>{item.costoOrden}</td>
                        <td>{item.costoAlmacenamiento}</td>
                        <td>{item.costoStockout}</td>
                        <td>{item.costoTotalSemanal}</td>
                        <td>{item.costoTotalAcumulado}</td>
                        <td>{item.costoPromedio.toFixed(2)}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    )

}