// @ts-nocheck
import { EventoFinArreglo } from "./EventoFinArreglo.js";
import { EventoFinEtapa1 } from "./EventoFinEtapa1.js";
import { EventoFinEtapa2 } from "./EventoFinEtapa2.js";
import { EventoLlegadaComputadora } from "./EventoLlegadaComputador.js";
import { TablaProbabilidad } from "./TablaProbabilidad.js";
import { Tecnico } from "./Tecnico.js";
import { EventoFinSimulacion } from "./EventoFinSimulacion.js";

export class GestorSimulacion {

    constructor(x, numeroIteraciones, minutoDesde, desviacion ,cambioPlaca,  ampliacionMemoria, formateoDisco, agregarCdoDvd, tablaRungeKutta) {

        this.reloj = 0;
        this.x = x;
        this.numeroIteraciones = numeroIteraciones;
        this.minutoDesde = minutoDesde;

        // Esta tabla de probabilidad, tiene como filas los trabajos. Cada trabajo tiene un metodo para calcular su tiempo requerido.
        this.tecnico = new Tecnico(
            new TablaProbabilidad(desviacion, [
                {valor: {tiempo: Number(cambioPlaca.tiempo), trabajo: "Cambio de Placa"}, probabilidad: Number(cambioPlaca.probabilidad)},
                {valor: {tiempo: Number(ampliacionMemoria.tiempo), trabajo: "Ampliacion Memoria"}, probabilidad: Number(ampliacionMemoria.probabilidad)},
                {valor: {tiempo: Number(formateoDisco.tiempo), trabajo: "Formateo Disco"}, probabilidad: Number(formateoDisco.probabilidad)},
                {valor: {tiempo: Number(agregarCdoDvd.tiempo), trabajo: "Agregar CD o DVD"}, probabilidad: Number(agregarCdoDvd.probabilidad)}]),

            this,
            tablaRungeKutta
        );

        this.contadorGlobalComputadora = 0
        this.contadorComputadorasArregladas = 0;
        this.tiempoPermanenciaPc = null;
        this.acumTiempoPermanencia = 0;
        this.tiempoPermanenciaPromedio = 0;
        this.eventoLlegadaComputadora = new EventoLlegadaComputadora(0, Math.random(), this.tecnico, this);
        this.eventoFinArreglo = new EventoFinArreglo(this.tecnico);
        this.eventoFinEtapa1 = new EventoFinEtapa1(this.tecnico);
        this.eventoFinSimulacion = new EventoFinSimulacion(x);

        this.arrayEventoFinEtapa2 = [];
        this.computadoras = [];


        this.contadorSimulaciones = 0;
        this.vectorEstados = [];

        this.eventoActual;
    }

    iniciarSimulacion() {

        let vectorEstados = [];
        let cantSimulaciones = 0;
        let cantIteracionesVecEstados = 0;

        while (cantSimulaciones <= 100000 && this.reloj < this.x) {
            if(this.reloj >= this.minutoDesde && cantIteracionesVecEstados < this.numeroIteraciones) {
                vectorEstados.push(this.crearLineaVectorEstado());
                this.limpiarEstado();
                cantIteracionesVecEstados += 1
            }
            this.eventoActual = this.obtenerSiguienteEvento();
            this.reloj = this.eventoActual.getTiempoOcurrencia();
            this.eventoActual.disparar(this.reloj);
            
            cantSimulaciones += 1;
        }
        this.limpiarEstado();
        let response = {
            ultimaFilaVecEstado: [this.crearLineaVectorEstado()],
            vectorEstadoVisible: vectorEstados
        }

        /*console.log(JSON.stringify(vectorEstados))
        console.log('***************')
        console.log(JSON.stringify(response.ultimaFilaVecEstado))*/
        return response
        
    };

    getSiguienteID(){
        this.contadorGlobalComputadora += 1;
        return this.contadorGlobalComputadora;
    }

    obtenerSiguienteEvento() {
        let siguienteEvento = this.eventoLlegadaComputadora;
        if (this.eventoFinArreglo.getTiempoOcurrencia() != null && this.eventoFinArreglo.getTiempoOcurrencia() < siguienteEvento.getTiempoOcurrencia() ) {
            // @ts-ignore
            siguienteEvento = this.eventoFinArreglo;
        }
        if(this.eventoFinEtapa1.getTiempoOcurrencia() != null && this.eventoFinEtapa1.getTiempoOcurrencia() < siguienteEvento.getTiempoOcurrencia()) {
            siguienteEvento = this.eventoFinEtapa1;
        }

        if(this.eventoFinSimulacion.getTiempoOcurrencia() < siguienteEvento.getTiempoOcurrencia()) {
            siguienteEvento = this.eventoFinSimulacion
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
            finEtapa1: this.eventoFinEtapa1.tiempoOcurrencia
        };

        linea.arrayEventoFinEtapa2 = this.arrayEventoFinEtapa2.map(e => {return {
            tiempo: e.getTiempoOcurrencia(),
            computadora: e.computadora.idComputadora
        }});

        linea.datosRungeKutta = {
            rnd: this.tecnico.rndRungeKutta,
            sectores: this.tecnico.cantidadSectores,
            tiempo: this.tecnico.tiempoN
        }

        linea.trabajo =  {
            rnd: this.tecnico.rndTrabajo,
            trabajoRequerido: this.tecnico.trabajoRequerido?.descripcion
        }

        linea.tecnico = {
            estado: this.tecnico.estado,
            idComputadora: this.tecnico.idComputadoraActual,
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
            id: c.idComputadora, estado: c.estado, tiempoLlegada: c.tiempoLlegada, tiempoFinEspera: c.tiempoFinEspera, tiempoInicioArreglo: c.tiempoInicioArreglo, tiempoRungeKutta: c.tiempoRungeKutta}})
        
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

    hayLugar() {
        return this.computadoras.length < 10;
    }



}