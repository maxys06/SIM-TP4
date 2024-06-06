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
        this.tiempoPermanenciaPc = null;
        this.acumTiempoPermanencia = 0;
        this.tiempoPermanenciaPromedio = 0;
        this.eventoLlegadaComputadora = new EventoLlegadaComputadora(0, Math.random(), this.tecnico, this);
        this.eventoFinArreglo = new EventoFinArreglo(this.tecnico);
        this.eventoFinEtapa1 = new EventoFinEtapa1(this.tecnico);

        this.arrayEventoFinEtapa2 = [];
        this.computadoras = [];


        this.contadorSimulaciones = 0;
        this.vectorEstados = [];

        this.eventoActual;
    }

    iniciarSimulacion() {

        let evento;

        while (this.reloj <= limite) {

            evento = this.obtenerSiguienteEvento();
            this.reloj = evento.getTiempoOcurrencia();
            evento.disparar();
            this.contadorSimulaciones += 1;
            if (linf <=this.contadorSimulaciones <= lsup) {
                this.vectorEstados.add(this.crearLineaVectorEstado());
            }
        }
    };

    test() {

        let vectorEstados = [];
        vectorEstados.push(this.crearLineaVectorEstado());

        let cantSimulaciones = 0;
        while (cantSimulaciones <= 20) {
            this.eventoActual = this.obtenerSiguienteEvento();
            this.reloj = this.eventoActual.getTiempoOcurrencia();
            console.log(this.eventoActual.getDescripcion());
            this.eventoActual.disparar(this.reloj);
            vectorEstados.push(this.crearLineaVectorEstado());
            this.limpiarEstado();
            cantSimulaciones += 1;
        }

        console.log(JSON.stringify(vectorEstados));
        
    }

    obtenerSiguienteEvento() {
        let siguienteEvento = this.eventoLlegadaComputadora;
        if (this.eventoFinArreglo.getTiempoOcurrencia() != null && this.eventoFinArreglo.getTiempoOcurrencia() < siguienteEvento.getTiempoOcurrencia() ) {
            siguienteEvento = this.eventoFinArreglo;
        }
        if(this.eventoFinEtapa1.getTiempoOcurrencia() != null && this.eventoFinEtapa1.getTiempoOcurrencia() < siguienteEvento.getTiempoOcurrencia()) {
            siguienteEvento = this.eventoFinEtapa1;
        }

        this.arrayEventoFinEtapa2.forEach(e => {
            if (e.getTiempoOcurrencia() != null && e.getTiempoOcurrencia() < siguienteEvento.getTiempoOcurrencia()) {
                siguienteEvento = e;
            }
        });

        return siguienteEvento;


    }

    limpiarEstado() {
        this.tiempoPermanenciaPc = null;
        this.eventoFinArreglo.limpiar();
        this.eventoFinEtapa1.limpiar();
        this.tecnico.limpiar();
        this.eventoLlegadaComputadora.limpiar();
    }

    crearLineaVectorEstado() {
        let linea = {};
        linea.reloj = this.reloj;
        linea.evento = this.eventoActual? this.eventoActual.getDescripcion() : "Inicio de Simulacion";

        linea.eventoLlegadaComputadora = {
            rnd: this.eventoLlegadaComputadora.rnd,
            tiempo: this.eventoLlegadaComputadora.tiempo,
            proxLlegada: this.eventoLlegadaComputadora.proxLlegada,
        };

        linea.eventoFinArreglo = {
            rnd: this.eventoFinArreglo.rnd,
            tiempo: this.eventoFinArreglo.tiempo,
            finArreglo: this.eventoFinArreglo.finArreglo,
        };

        linea.eventoFinEtapa1 = {
            rnd: this.eventoFinEtapa1.rnd,
            tiempo: this.eventoFinEtapa1.tiempo,
            tiempoOcurrencia: this.eventoFinEtapa1.tiempoOcurrencia
        };

        linea.arrayEventoFinEtapa2 = this.arrayEventoFinEtapa2.map(e => {return {
            tiempo: e.getTiempoOcurrencia(),
            computadora: e.computadora.idComputadora
        }})

        linea.trabajo =  {
            rnd: this.tecnico.rndTrabajo,
            trabajoRequerido: this.tecnico.trabajoRequerido?.descripcion
        }

        linea.tecnico = {
            estado: this.tecnico.estado,
            trabajandoEn: this.tecnico.trabajandoEn,
            colaComputadorasPorArreglar: this.tecnico.colaComputadorasPorArreglar.length,
            colaComputadorasFormateadas: this.tecnico.colaComputadorasFormateadas.length,
            tiempoOcupacionTecnico: this.tecnico.tiempoOcupacionTecnico,
            acumTiempoOcupacionTecnico: this.tecnico.acumTiempoOcupacionTecnico,
            proporcionOcupacionTecnico: this.tecnico.proporcionOcupacionTecnico,
        };

        linea.contadorComputadorasArregladas = this.contadorComputadorasArregladas;
        linea.tiempoPermanenciaPc = this.tiempoPermanenciaPc;
        linea.acumTiempoPermanencia = this.acumTiempoPermanencia;
        linea.tiempoPermanenciaPromedio = this.tiempoPermanenciaPromedio;
        

        linea.computadoras = this.computadoras.map(c => {return {
            id: c.idComputadora, estado: c.estado, tiempoLlegada: c.tiempoLlegada, tiempoFinEspera: c.tiempoFinEspera, tiempoFinArreglo: c.tiempoFinArreglo}})
        
        return linea;
        

    }

    acumularPermanencia(tiempoLlegadaPc) {
        this.contadorComputadorasArregladas += 1;
        this.tiempoPermanenciaPc = this.reloj - tiempoLlegadaPc;
        this.acumTiempoPermanencia += this.reloj - tiempoLlegadaPc;
        this.tiempoPermanenciaPromedio = this.acumTiempoPermanencia / this.contadorComputadorasArregladas;
    }

    actualizarEventoFinArreglo(minutoActual, rnd, tiempoTrabajo) {
        this.eventoFinArreglo.actualizar(minutoActual, rnd, tiempoTrabajo);
    }

    agregarEventoFinEsperaFormateo(computadora) {
        this.arrayEventoFinEtapa2.push(new EventoFinEtapa2(computadora, computadora.tiempoFinEspera, this.tecnico, this));
    }

    actualizarEventoFormateo(rndTiempoTotalFormateo, tiempoTotalFormateo, tiempoFinEtapa1) {
        this.eventoFinEtapa1.actualizar(rndTiempoTotalFormateo, tiempoTotalFormateo, tiempoFinEtapa1);
    }

    eliminarEvento(eventoFinEtapa2) {
        this.arrayEventoFinEtapa2 = this.arrayEventoFinEtapa2.filter(e => e != eventoFinEtapa2)
    }

    agregarComputadora(computadora) {
        this.computadoras.push(computadora);
    }

    eliminarComputadora(computadora) {

        this.computadoras = this.computadoras.filter(c => c != computadora);

    }



}