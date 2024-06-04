export class EventoFinArreglo{

    constructor() {
        this.rnd = null;
        this.tiempo = null;
        this.finArreglo = null;

    }

    actualizar(minutoActual, rnd, tiempoTrabajo) {
        this.rnd = rnd;
        this.tiempo = tiempoTrabajo;
        this.finArreglo = minutoActual + tiempoTrabajo;
    }

}