import generadorUniforme from "../GeneradorUniforme.js";
import { Computadora } from "./Computadora.js";
export class EventoLlegadaComputadora {

    constructor(minutoActual, rnd, tecnico) {

        this.rnd = rnd;
        this.tiempo = generadorUniforme.generarDistribucionUniforme(30, 90, rnd);
        this.proxLlegada = minutoActual + this.tiempo;
        this.tecnico = tecnico;

    }

    getTiempoOcurrencia() {
        return this.proxLlegada;
    }

    disparar(minutoActual) {

        // Tecnico esta Libre
        if(this.tecnico.libre()) {
            let computadora = new Computadora("Siendo arreglada", minutoActual)
            this.tecnico.comenzarTrabajo(minutoActual, computadora);
        }
        else {
        //Hay espacio en la cola?
            if (this.tecnico.tieneEspacio()) {
                let computadora = new Computadora("En espera", minutoActual);
                tecnico.agregarACola(computadora);
            }
        // Si no hay espacio en la cola, desechamos el objeto.
        }

        // Generamos el proximo evento
        this.rnd = Math.random();
        this.tiempo = generadorUniforme.generarDistribucionUniforme(30, 90, this.rnd);
        this.proxLlegada = minutoActual + this.tiempo;



    }

}