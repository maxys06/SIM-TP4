import React from 'react';
import style from './Tabla.module.css'

export default function Tabla({ datos, sticky=true }) {

    return (
        <table className= {style.table} >
            <thead  className={sticky ? style.stickyTopHeader : ""}>
                <tr>
                    <th className={style.headerSticky}>Reloj</th>
                    <th className={style.headerSticky}>Evento</th>
                    <th>Llegada Computadora</th>
                    <th>Fin Arreglo</th>
                    <th>Fin Etapa 1</th>
                    <th>Fin Etapa 2</th>
                    <th>Trabajo</th>
                    <th>Técnico</th>
                    <th>Contador de Computadoras Arregladas</th>
                    <th>Tiempo Permanencia PC</th>
                    <th>Acumulador Tiempo Permanencia</th>
                    <th>Acumulador Tiempo Permanencia Promedio</th>
                    <th>Computadoras</th>
                </tr>
            </thead>
            <tbody>
                {datos.map((item, idx) => (
                    <tr key={idx}>
                        <td>{item.reloj.toFixed(2)}</td>
                        <td>{item.evento}</td>
                        <td>
                            {item.eventoLlegadaComputadora ? (
                                <>
                                    <div>RND: {item.eventoLlegadaComputadora.rnd ? item.eventoLlegadaComputadora.rnd.toFixed(2) : null }</div>
                                    <div>Tiempo: {item.eventoLlegadaComputadora.tiempo ? item.eventoLlegadaComputadora.tiempo.toFixed(2) : null }</div>
                                    <div>ProxLlegada: {item.eventoLlegadaComputadora.proxLlegada ? item.eventoLlegadaComputadora.proxLlegada.toFixed(2) : null}</div>
                                </>
                            ) : null}
                        </td>
                        <td>
                            {item.eventoFinArreglo ? (
                                <>
                                    <div>RND: {item.eventoFinArreglo.rnd ? item.eventoFinArreglo.rnd.toFixed(2) : null}</div>
                                    <div>Tiempo: {item.eventoFinArreglo.tiempo ? item.eventoFinArreglo.tiempo.toFixed(2) : null}</div>
                                    <div>FinArreglo: {item.eventoFinArreglo.finArreglo ? item.eventoFinArreglo.finArreglo.toFixed(2) : null }</div>
                                </>
                            ) : null}
                        </td>
                        <td>
                            {item.eventoFinEtapa1 ? (
                                <>
                                    <div>RND: {item.eventoFinEtapa1.rnd ? item.eventoFinEtapa1.rnd.toFixed(2) : null}</div>
                                    <div>Tiempo: {item.eventoFinEtapa1.tiempo ? item.eventoFinEtapa1.tiempo.toFixed(2) : null }</div>
                                    <div>FinEtapa1: {item.eventoFinEtapa1.finEtapa1 ? item.eventoFinEtapa1.finEtapa1.toFixed(2) : null }</div>
                                </>
                            ) : null}
                        </td>
                        <td>
                            <div>

                            {item.arrayEventoFinEtapa2.map((evento, idx) => (
                                <div key={idx}>
                                    <div>Tiempo: {evento.tiempo ? evento.tiempo.toFixed(2) : null}</div>
                                    <div>Computadora: {evento.computadora}</div>
                                </div>
                            ))}
                            </div>
                        </td>
                        <td>
                            {item.trabajo ? (
                                <>
                                    <div>RND: {item.trabajo.rnd ? item.trabajo.rnd.toFixed(2) : null}</div>
                                    <div>Trabajo Requerido: {item.trabajo.trabajoRequerido}</div>
                                </>
                            ) : null}
                        </td>
                        <td>
                            {item.tecnico ? (
                                <>
                                    <div>Estado: {item.tecnico.estado}</div>
                                    <div>Trabajando En: {item.tecnico.trabajandoEn}</div>
                                    <div>Cola Computadoras Por Arreglar: {item.tecnico.colaComputadorasPorArreglar}</div>
                                    <div>Cola Computadoras Formateadas: {item.tecnico.colaComputadorasFormateadas}</div>
                                    <div>Tiempo Ocupacion Tecnico: {item.tecnico.tiempoOcupacionTecnico }</div>
                                    <div>Acum Tiempo Ocupacion Tecnico: {item.tecnico.acumTiempoOcupacionTecnico ? item.tecnico.acumTiempoOcupacionTecnico.toFixed(2) : null }</div>
                                    <div>Proporcion Ocupacion Tecnico: {item.tecnico.proporcionOcupacionTecnico ? item.tecnico.proporcionOcupacionTecnico.toFixed(2) + '%' : null }</div>
                                </>
                            ) : null}
                        </td>
                        <td>{item.contadorComputadorasArregladas}</td>
                        <td>{item.tiempoPermanenciaPc ? item.tiempoPermanenciaPc.toFixed(2) :  '-'}</td>
                        <td>{item.acumTiempoPermanencia ? item.acumTiempoPermanencia.toFixed(2) : '-' }</td>
                        <td>{item.acumTiempoPermanenciaPromedio ? item.acumTiempoPermanenciaPromedio.toFixed(2) : '-'}</td>
                        <td>
                            <div>
                            {item.computadoras.map((pc)=> (
                                <div key={pc.idComputadora}>
                                    <div>ID: {pc.idComputadora}</div>
                                    <div>Estado: {pc.estado}</div>
                                    <div>Tiempo Llegada: {pc.tiempoLlegada ? pc.tiempoLlegada.toFixed(2) : null}</div>
                                    <div>Tiempo Fin Espera: {pc.tiempoFinEspera ? pc.tiempoFinEspera.toFixed(2) : null }</div>
                                    <div>Tiempo Fin Arreglo: {pc.tiempoFinArreglo ? pc.tiempoFinArreglo.toFixed(2) : null}</div>
                                </div>
                            ))}
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
