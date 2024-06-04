export class EventoFinEtapa1 {

    constructor() {
        this.rnd = null;
        this.tiempo = null;
        this.tiempoOcurrencia = null;
    }

    actualizar(rnd, tiempoTotal, tiempoOcurrencia) {
        this.rnd = rnd;
        this.tiempo = tiempoTotal;
        this.tiempoOcurrencia = tiempoOcurrencia;
    }

}