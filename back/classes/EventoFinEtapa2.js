export class EventoFinEtapa2 {

    constructor(computadora, tiempoFinEtapa2, tecnico, contextoSimulacion) {
        this.computadora = computadora;
        this.tiempoFinEtapa2 = tiempoFinEtapa2;
        this.tecnico = tecnico
        this.contextoSimulacion = contextoSimulacion
    }

    disparar(minutoActual) {
        
        if(this.tecnico.estaLibre()) {
            this.tecnico.iniciarEtapaFinal(minutoActual, this.computadora);
        }
        else {
            this.tecnico.agregarAColaFormateada(this.computadora);
        }

        this.contextoSimulacion.eliminarEvento(this);
    }

    getTiempoOcurrencia() {
        return this.tiempoFinEtapa2
    }

    getDescripcion(){
        return "Fin de Etapa2"
    }



}