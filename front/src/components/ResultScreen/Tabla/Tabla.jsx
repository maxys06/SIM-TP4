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
                        <td>{item.reloj}</td>
                        <td>{item.evento}</td>
                        <td>
                            {item.eventoLlegadaComputadora ?  
                                <table className= {style.Minitable} >
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
                                        <td>{item.eventoLlegadaComputadora.proxLlegada ? item.eventoLlegadaComputadora.proxLlegada  : '-' }</td>
                                    </tr>

                                    
                                </table>
                            : null
                            }
                        </td>
                        <td>
                            {item.eventoFinArreglo ?  
                                <table className= {style.Minitable} >
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
                                        <td>{item.eventoFinArreglo.finArreglo ? item.eventoFinArreglo.finArreglo  : '-' }</td>
                                    </tr>
                                    
                                </table>
                            : null
                            }
                        </td>
                        <td>
                            {item.eventoFinEtapa1 ?  
                                <table className= {style.Minitable} >
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
                                        <td>{item.eventoFinEtapa1.finEtapa1 ? item.eventoFinEtapa1.finEtapa1 : '-' }</td>
                                    </tr>

                                    
                                </table>
                            : null
                            }
                        </td>
                        <td>
                            {item.arrayEventoFinEtapa2.length > 0 ?  
                                <table className= {style.Minitable} >
                                    <thead>
                                        <tr>
                                            <th>Tiempo</th>
                                            <th>Computadora</th>
                                        </tr>
                                    </thead>
                                    {item.arrayEventoFinEtapa2.map((Evento)=> (
                                        <tr key={Evento.computadora}>
                                            <td>{Evento.tiempo}</td>
                                            <td>{Evento.computadora}</td>
                                        </tr>
                                    ))}
                                </table>
                            : null
                            }
                        </td>
                        <td>
                            {item.trabajo.rnd ?  
                                <table className= {style.Minitable} >
                                    <thead>
                                        <tr>
                                            <th>RND</th>
                                            <th>Trabajo Requerido</th>        
                                            
                                        </tr>
                                    </thead>
                                    <tr>
                                        <td>{item.trabajo.rnd ? item.trabajo.rnd.toFixed(2) : '-'}</td>
                                        <td>{item.trabajo.trabajoRequerido}</td>
                                    </tr>

                                </table>
                            : null
                            }
                        </td>
                        <td>
                            {item.tecnico ?  
                                <table className= {style.Minitable} >
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
                                        <td>{item.tecnico.proporcionOcupacionTecnico ? item.tecnico.proporcionOcupacionTecnico.toFixed(2) * 100+ '%' : null }</td>
                                    </tr>

                                    
                                </table>
                            : null
                            }
                        </td>
                        <td>{item.contadorComputadorasArregladas}</td>
                        <td>{item.tiempoPermanenciaPc ? item.tiempoPermanenciaPc.toFixed(2) :  '-'}</td>
                        <td>{item.acumTiempoPermanencia ? item.acumTiempoPermanencia.toFixed(2) : '-' }</td>
                        <td>{item.acumTiempoPermanenciaPromedio ? item.acumTiempoPermanenciaPromedio.toFixed(2) : '-'}</td>
                        <td>
                            {item.computadoras.length > 0 ?  
                                <table className= {style.Minitable} >
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Estado</th>
                                            <th>Tiempo Llegada:</th>
                                            <th>Tiempo Fin Espera:</th>
                                            <th>Tiempo Inicio Arreglado</th>
                                        </tr>
                                    </thead>
                                    {item.computadoras.map((pc)=> (
                                        <tr key={pc.id}>
                                            <td>{pc.id}</td>
                                            <td>{pc.estado}</td>
                                            <td>{pc.tiempoLlegada ? pc.tiempoLlegada.toFixed(2) : null}</td>
                                            <td>{pc.tiempoFinEspera ? pc.tiempoFinEspera.toFixed(2) : null }</td>
                                            <td>{pc.timepoInicioArreglo ? pc.timepoInicioArreglo.toFixed(2) : null}</td>
                                        </tr>
                                    ))}
                                </table>
                            : null
                            }
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
