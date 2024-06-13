import generadorUniforme from "../GeneradorUniforme.js";
import { Computadora } from "./Computadora.js";
export class EventoLlegadaComputadora {

    constructor(minutoActual, rnd, tecnico, contextoSimulacion) {

        this.rnd = rnd;
        this.tiempo = generadorUniforme.generarDistribucionUniforme(30, 90, rnd);
        this.proxLlegada = minutoActual + this.tiempo;
        this.tecnico = tecnico;
        this.contextoSimulacion = contextoSimulacion;
        

    }

    getTiempoOcurrencia() {
        return this.proxLlegada;
    }

    disparar(minutoActual) {


        // Si hay lugar en el laboratiorio, procedemos
        if(this.contextoSimulacion.hayLugar()) {
            if(this.tecnico.estaLibre()) {
                let computadora = new Computadora("Siendo arreglada", minutoActual, this.contextoSimulacion.getSiguienteID());
                this.contextoSimulacion.agregarComputadora(computadora);
                this.tecnico.comenzarTrabajo(minutoActual, computadora);
            }
            else {
            
                    let computadora = new Computadora("En espera", minutoActual, this.contextoSimulacion.getSiguienteID());
                    this.contextoSimulacion.agregarComputadora(computadora);
                    this.tecnico.agregarACola(computadora);
            
            }
        }
        // Si no hay espacio en el laboratorio, se desecha el objeto.



        // Generamos el proximo evento
        this.rnd = Math.random();
        this.tiempo = generadorUniforme.generarDistribucionUniforme(30, 90, this.rnd);
        this.proxLlegada = minutoActual + this.tiempo;
    }

    limpiar() {
        this.rnd = null;
        this.tiempo = null;
    }

    getDescripcion(){
        return "Llegada Computadora"
    }

}