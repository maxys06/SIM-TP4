import React from 'react';
import style from './Tabla.module.css'

export default function Tabla({ datos, sticky=true }) {
    return (
        <table className={style.table}>
            <thead>
                <tr>
                    <th className={`${sticky ? style.stickyLeftColumn1 : ""} ${style.stickyTopHeader}`}>Iteracion</th>
                    <th className={`${sticky ? style.stickyLeftColumn1 : ""} ${style.stickyTopHeader}`}>Reloj</th>
                    <th className={`${sticky ? style.stickyLeftColumn2 : ""} ${style.stickyTopHeader}`}>Evento</th>
                    <th className={style.stickyTopHeader}>Llegada Computadora</th>
                    <th className={style.stickyTopHeader}>Fin Arreglo</th>
                    <th className={style.stickyTopHeader}>Fin Etapa 1</th>
                    <th className={style.stickyTopHeader}>Fin Etapa 2</th>
                    <th className={style.stickyTopHeader}>Trabajo</th>
                    <th className={style.stickyTopHeader}>Técnico</th>
                    <th className={style.stickyTopHeader}>Contador de Computadoras Arregladas</th>
                    <th className={style.stickyTopHeader}>Tiempo Permanencia PC</th>
                    <th className={style.stickyTopHeader}>Acumulador Tiempo Permanencia</th>
                    <th className={style.stickyTopHeader}>Tiempo Permanencia Promedio</th>
                    <th className={style.stickyTopHeader}>Computadoras</th>
                </tr>
            </thead>    
            <tbody>
                {datos.map((item, idx) => (

                    <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td className={sticky ? style.stickyLeftColumn1 : ""}>{Number(item.reloj).toFixed(2)}</td>
                        <td className={sticky ? style.stickyLeftColumn2 : ""}>{item.evento}</td>
                        <td>
                            <table className={style.Minitable}>
                                <thead>
                                    <tr>
                                        <th>RND</th>
                                        <th>Tiempo</th>
                                        <th>Proxima Llegada</th>
                                    </tr>
                                </thead>
                                <tr>
                                    <td>{item.eventoLlegadaComputadora.rnd ? item.eventoLlegadaComputadora.rnd.toFixed(2) : '-'}</td>
                                    <td>{item.eventoLlegadaComputadora.tiempo ? item.eventoLlegadaComputadora.tiempo.toFixed(2) : '-'}</td>
                                    <td>{item.eventoLlegadaComputadora.proxLlegada ? item.eventoLlegadaComputadora.proxLlegada.toFixed(2) : '-'}</td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table className={style.Minitable}>
                                <thead>
                                    <tr>
                                        <th>RND</th>
                                        <th>Tiempo</th>
                                        <th>Fin Arreglo</th>
                                    </tr>
                                </thead>
                                <tr>
                                    <td>{item.eventoFinArreglo.rnd ? item.eventoFinArreglo.rnd.toFixed(2) : '-'}</td>
                                    <td>{item.eventoFinArreglo.tiempo ? item.eventoFinArreglo.tiempo.toFixed(2) : '-'}</td>
                                    <td>{item.eventoFinArreglo.finArreglo ? item.eventoFinArreglo.finArreglo.toFixed(2) : '-'}</td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table className={style.Minitable}>
                                <thead>
                                    <tr>
                                        <th>RND</th>
                                        <th>Tiempo</th>
                                        <th>Fin Etapa 1</th>
                                    </tr>
                                </thead>
                                <tr>
                                    <td>{item.eventoFinEtapa1.rnd ? item.eventoFinEtapa1.rnd.toFixed(2) : '-'}</td>
                                    <td>{item.eventoFinEtapa1.tiempo ? item.eventoFinEtapa1.tiempo.toFixed(2) : '-'}</td>
                                    <td>{item.eventoFinEtapa1.finEtapa1 ? item.eventoFinEtapa1.finEtapa1.toFixed(2) : '-'}</td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table className={style.Minitable}>
                                <thead>
                                    <tr>
                                        <th>Tiempo</th>
                                        <th>Computadora</th>
                                    </tr>
                                </thead>
                                {item.arrayEventoFinEtapa2.length > 0 ? item.arrayEventoFinEtapa2.map((Evento)=> (
                                    <tr key={Evento.computadora}>
                                        <td>{Evento.tiempo.toFixed(2)}</td>
                                        <td>{Evento.computadora}</td>
                                    </tr>
                                )): 
                                <tr>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>}
                            </table>
                        </td>
                        <td>
                            <table className={style.Minitable}>
                                <thead>
                                    <tr>
                                        <th>RND</th>
                                        <th>Trabajo Requerido</th>        
                                    </tr>
                                </thead>
                                <tr>
                                    <td>{item.trabajo.rnd ? item.trabajo.rnd.toFixed(2) : '-'}</td>
                                    <td>{item.trabajo.trabajoRequerido ? item.trabajo.trabajoRequerido : '-'}</td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table className={style.Minitable}>
                                <thead>
                                    <tr>
                                        <th>Estado</th>
                                        <th>ID Computadora</th>
                                        <th>Tipo Trabajo</th>
                                        <th>Cola Computadoras Por Arreglar</th>
                                        <th>Cola Computadoras Formateada</th>
                                        <th>Tiempo Ocupacion Tecnico</th>
                                        <th>Acum Tiempo Ocupacion Tecnico</th>
                                        <th>Proporcion Ocupacion Tecnico</th>
                                    </tr>
                                </thead>
                                <tr>
                                    <td>{item.tecnico.estado}</td>
                                    <td>{item.tecnico.idComputadora}</td>
                                    <td>{item.tecnico.trabajandoEn}</td>
                                    <td>{item.tecnico.colaComputadorasPorArreglar}</td>
                                    <td>{item.tecnico.colaComputadorasFormateadas }</td>
                                    <td>{item.tecnico.acumTiempoOcupacionTecnico ? item.tecnico.acumTiempoOcupacionTecnico.toFixed(2) : '-'}</td>
                                    <td>{item.tecnico.acumTiempoOcupacionTecnico ? item.tecnico.acumTiempoOcupacionTecnico.toFixed(2) : '-'}</td>
                                    <td>{item.tecnico.proporcionOcupacionTecnico ? (item.tecnico.proporcionOcupacionTecnico * 100).toFixed(2) + '%' : null }</td>
                                </tr>
                            </table>
                        </td>
                        <td>{item.contadorComputadorasArregladas}</td>
                        <td>{item.tiempoPermanenciaPc ? item.tiempoPermanenciaPc.toFixed(2) : '-'}</td>
                        <td>{item.acumTiempoPermanencia ? item.acumTiempoPermanencia.toFixed(2) : '-' }</td>
                        <td>{item.acumTiempoPermanenciaPromedio ? item.acumTiempoPermanenciaPromedio.toFixed(2) : '-'}</td>
                        <td>
                        <table className={style.Minitable}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Estado</th>
                                    <th>Tiempo Llegada</th>
                                    <th>Tiempo Fin Espera</th>
                                    <th>Tiempo Inicio Arreglado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {item.computadoras.length > 0 ? (
                                    <>
                                        {item.computadoras.map((pc) => (
                                            <tr key={pc.id}>
                                                <td>{pc.id}</td>
                                                <td>{pc.estado}</td>
                                                <td>{pc.tiempoLlegada ? pc.tiempoLlegada.toFixed(2) : null}</td>
                                                <td>{pc.tiempoFinEspera ? pc.tiempoFinEspera.toFixed(2) : null}</td>
                                                <td>{pc.tiempoInicioArreglo ? pc.tiempoInicioArreglo.toFixed(2) : null}</td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td colSpan="4">Cantidad en laboratorio: </td>
                                            <td>{item.computadoras.length}</td>
                                        </tr>
                                    </>
                                ) : (
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
