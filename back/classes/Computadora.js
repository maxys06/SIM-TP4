

export class Computadora {

    constructor(estado, tiempoLlegada, id) {

        this.idComputadora = id;
        this.tiempoLlegada = tiempoLlegada;
        this.estado = estado; // En espera, Siendo Arreglada, Arreglada, Rechazada, Formateado en curso, Formateo esperando tecnico. 
        this.tiempoFinEspera = null;
        this.tiempoInicioArreglo = null;

    }

    /** 
     *
     *  
     */
    siendoArreglada(minutoActual=null) {
        this.estado = 'Siendo Arreglada';
        this.tiempoInicioArreglo = minutoActual;
    }

    setTiempoFinEsperaFormateo(tiempoFinEsperaFormateo) {
        this.tiempoFinEspera = tiempoFinEsperaFormateo;
    }

    siendoFormateada() {
        if (this.estado != 'Siendo Arreglada') throw new Error("TRANSICION INVALIDA. A FORMATEADA SOLO SE PUEDE IR DESDE ARREGLADA");
        this.estado = 'Siendo Formateada'
    }

    formateadoEnEspera() {
        if (this.estado != 'Siendo Formateada') throw new Error("TRANSICION INVALIDA. A EN ESPERA SOLO SE PUEDE IR DESDE SIENDO FORMATEADA");
        this.estado = 'Formateado en espera'
    }

}


