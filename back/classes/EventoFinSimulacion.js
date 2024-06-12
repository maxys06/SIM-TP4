export class EventoFinSimulacion {
    constructor(tiempo) {
        this.tiempoOcurrencia = tiempo;
        this.descripcion = 'Fin de simulacion';
        
    }

    getTiempoOcurrencia() {
        return this.tiempoOcurrencia
    }

    getDescripcion() {
        return this.descripcion
    }

    disparar() {
        ///
    }
}