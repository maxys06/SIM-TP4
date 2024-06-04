import { EventoFinArreglo } from "./EventoFinArreglo.js";
import { EventoFinEtapa1 } from "./EventoFinEtapa1.js";
import { EventoFinEtapa2 } from "./EventoFinEtapa2.js";
import { EventoLlegadaComputadora } from "./EventoLlegadaComputador.js";
import { TablaProbabilidad } from "./TablaProbabilidad.js";
import { Tecnico } from "./Tecnico.js";

export class GestorSimulacion {

    constructor(x, numeroIteraciones, minutoDesde, desviacion ,cambioPlaca,  ampliacionMemoria, formateoDisco, agregarCdoDvd, tiempoTrabajoInicialFormateo, tiempoTrabajoFinalFormateo) {

        this.reloj = 0;
        this.x = x;
        this.numeroIteraciones = numeroIteraciones;
        this.minutoDesde = minutoDesde;

        // Esta tabla de probabilidad, tiene como filas los trabajos. Cada trabajo tiene un metodo para calcular su tiempo requerido.
        this.tecnico = new Tecnico(
            new TablaProbabilidad(desviacion, [
                {valor: {tiempo: cambioPlaca.tiempo, trabajo: "A: Cambio de Placa"}, probabilidad: cambioPlaca.probabilidad},
                {valor: {tiempo: ampliacionMemoria.tiempo, trabajo: "B: Ampliacion Memoria"}, probabilidad: ampliacionMemoria.probabilidad},
                {valor: {tiempo: formateoDisco.tiempo, trabajo: "C: Formateo Disco"}, probabilidad: formateoDisco.probabilidad},
                {valor: {tiempo: agregarCdoDvd.tiempo, trabajo: "D: Agregar CD o DVD"}, probabilidad: agregarCdoDvd.probabilidad}]),
            tiempoTrabajoInicialFormateo,
            tiempoTrabajoFinalFormateo,
            this
        );


        this.contadorComputadorasArregladas = 0;
        this.tiempoPermanenciaPc = 0;
        this.acumTiempoPermanencia = null;
        this.eventoLlegadaComputadora = new EventoLlegadaComputadora(0, Math.random(), this.tecnico);
        this.eventoFinArreglo = new EventoFinArreglo();
        this.eventoFinEtapa1 = new EventoFinEtapa1();
        this.arrayEventoFinEtapa2 = [];
        this.contadorSimulaciones = 0;
        this.vectorEstados = [];
    }

    iniciarSimulacion() {

        let evento;

        while (this.reloj <= limite) {

            evento = this.obtenerSiguienteEvento();
            this.reloj = evento.getTiempoOcurrencia();
            evento.disparar();
            this.contadorSimulaciones += 1;
            if (linf <=this.contadorSimulaciones <= lsup) {
                this.vectorEstados.add(this.crearVectorEstado());
            }
        }
    };

    test() {
        this.eventoLlegadaComputadora.disparar(0);
    }

    actualizarEventoFinArreglo(minutoActual, rnd, tiempoTrabajo) {
        this.eventoFinArreglo.actualizar(minutoActual, rnd, tiempoTrabajo);
    }

    agregarEventoFinEsperaFormateo(tiempoFinEsperaFormateo, computadora) {
        this.arrayEventoFinEtapa2.push(new EventoFinEtapa2(computadora, tiempoFinEsperaFormateo));
    }

    actualizarEventoFormateo(rndTiempoTotalFormateo, tiempoTotalFormateo, tiempoFinEtapa1) {
        this.eventoFinEtapa1.actualizar(rndTiempoTotalFormateo, tiempoTotalFormateo, tiempoFinEtapa1);
    }



}