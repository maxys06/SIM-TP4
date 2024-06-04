import { TablaProbabilidad } from "./TablaProbabilidad.js";

export class Tecnico {

    constructor(tablaTrabajos, tiempoTrabajoInicialFormateo, tiempoTrabajoFinalFormateo, contextoSimulacion) {

        this.estado = 'Libre';
        this.trabajandoEn = null; //Descripcion
        this.computadoraActual = null;

        this.colaComputadorasPorArreglar = [];
        this.colaComputadorasFormateadas = [];
        this.tiempoOcupacionTecnico = 0;
        this.acumTiempoOcupacionTecnico = 0;
        this.proporcionPorcentajeTecnico = 0; //LO GUARDAMOS COMO FRACCION (0.56) y en el front lo pasamos a porcentaje.

        this.tablaTrabajos = tablaTrabajos;
        this.tiempoTrabajoInicialFormateo = tiempoTrabajoInicialFormateo;
        this.tiempoTrabajoFinalFormateo = tiempoTrabajoFinalFormateo; 
        this.rndTrabajo = null;
        this.trabajoRequerido = null;

        this.contextoSimulacion = contextoSimulacion;

    }


    libre() {
        return this.estado = 'Libre';
    }

    agregarACola(computadora) {
        this.colaComputadorasPorArreglar.push(computadora);
    }

    comenzarTrabajo(minutoActual, computadora) {
        this.estado = 'Ocupado';
        this.rndTrabajo = Math.random();
        this.trabajoRequerido = this.tablaTrabajos.valorRandom(this.rndTrabajo);
        this.computadoraActual = computadora;

        if (this.trabajoRequerido.descripcion = 'C: Formateo Disco') {
            let rndTiempoTotalFormateo = Math.random();
            let tiempoTotalFormateo = this.trabajoRequerido.obtenerTiempo(rndTiempoTotalFormateo);

            computadora.siendoArreglada();
                
            // El minuto en el cual la computadora va a dejar de estar en espera por el formateo.
            let tiempoFinEsperaFormateo = minutoActual + tiempoTotalFormateo - this.tiempoTrabajoFinalFormateo;
            computadora.setTiempoFinEsperaFormateo(tiempoFinEsperaFormateo);

            let tiempoFinEtapa1 = minutoActual + this.tiempoTrabajoInicialFormateo; 
            
            //En este metodo, rellenamos de los datos relacionados al evento de formateo. 
            //Para mantener consistencia, aqui es donde se van a mostrar el rnd utilizado y
            //el tiempo total.
            this.contextoSimulacion.actualizarEventoFormateo(rndTiempoTotalFormateo, tiempoTotalFormateo, tiempoFinEtapa1);


            //Instanciamos un nuevo evento en la simulacion, el cual vamos a poder usar para actualizar el estado de la computadora.
            this.contextoSimulacion.agregarEventoFinEsperaFormateo(tiempoFinEsperaFormateo, computadora);



        }
        else {
            let rndTiempoTrabajo = Math.random();
            let tiempoTrabajo = this.trabajoRequerido.obtenerTiempo(rndTiempoTrabajo);

            //Actualizamos el evento de fin de arreglo.
            this.contextoSimulacion.actualizarEventoFinArreglo(minutoActual, rndTiempoTrabajo, tiempoTrabajo);
        }
    }

}