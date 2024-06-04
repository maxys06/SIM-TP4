export class Computadora {

    constructor(estado, tiempoLlegada) {

        this.tiempoLlegada = tiempoLlegada;
        this.estado = estado; // En espera, Siendo Arreglada, Arreglada, Rechazada, Formateado en curso, Formateo esperando tecnico. 
        this.tiempoFinEspera = null;
        this.tiempoFinArreglo = null;

    }

    siendoArreglada() {
        this.estado = 'Siendo Arreglada';
    }

    setTiempoFinEsperaFormateo(tiempoFinEsperaFormateo) {
        this.tiempoFinEspera = tiempoFinEsperaFormateo;
    }

}

