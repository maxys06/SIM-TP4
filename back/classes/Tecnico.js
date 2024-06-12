import { TablaProbabilidad } from "./TablaProbabilidad.js";

export class Tecnico {

    constructor(tablaTrabajos, tiempoTrabajoInicialFormateo, tiempoTrabajoFinalFormateo, contextoSimulacion) {

        this.estado = 'Libre';

        this.trabajandoEn = null; //Descripcion
        this.idComputadoraActual = null;

        this.computadoraActual = null;

        this.colaComputadorasPorArreglar = [];
        this.colaComputadorasFormateadas = [];
        this.computadorasEnFormateo = [];
        this.tiempoOcupacionTecnico = 0;
        this.acumTiempoOcupacionTecnico = 0;
        this.proporcionOcupacionTecnico = 0; //LO GUARDAMOS COMO FRACCION (0.56) y en el front lo pasamos a porcentaje.

        this.tablaTrabajos = tablaTrabajos;
        this.tiempoTrabajoInicialFormateo = tiempoTrabajoInicialFormateo;
        this.tiempoTrabajoFinalFormateo = tiempoTrabajoFinalFormateo; 
        
        this.rndTrabajo = null;
        this.trabajoRequerido = null;

        this.contextoSimulacion = contextoSimulacion;

    }


    liberar() {
        this.estado = 'Libre';
        this.trabajandoEn = null;
        this.idComputadoraActual = null;
    }

    estaLibre() {
        return this.estado == 'Libre';
    }

    agregarACola(computadora) {
        this.colaComputadorasPorArreglar.push(computadora);
    }

    agregarAColaFormateada(computadora) {
        computadora.formateadoEnEspera();
        this.colaComputadorasFormateadas.push(computadora);
    }

    /** 
     * TODO: Determinar bien como calculamos la estadistica de acumulacion del tecnico...
     * Este metodo deberia destruir el objeto, y actualizar el contexto de simulacion el cambio en las
     * estadisticas.
     * **/
    finalizarArreglo(minutoActual) {
        
        this.contextoSimulacion.acumularPermanencia(this.computadoraActual.tiempoLlegada);

        //Si este atributo fue seteado, significa que esta computadora fue formateada, y que ahora se encuentra en la ultima etapa.
        //El tiempo de ocupacion va a ser el tiempo que se demore en temrinar la ultima etapa.
        if(this.computadoraActual.tiempoFinEspera) {
            this.tiempoOcupacionTecnico = this.tiempoTrabajoFinalFormateo;
        }
        else {
            this.tiempoOcupacionTecnico = minutoActual - this.computadoraActual.tiempoInicioArreglo;
        }
        this.acumTiempoOcupacionTecnico += this.tiempoOcupacionTecnico;
        this.proporcionOcupacionTecnico = this.acumTiempoOcupacionTecnico / minutoActual;

        this.contextoSimulacion.eliminarComputadora(this.computadoraActual);
        this.computadoraActual = null;
        

    }

    terminarEtapa1(minutoActual) {

        this.computadoraActual.siendoFormateada(minutoActual);


        //Instanciamos un nuevo evento en la simulacion, el cual vamos a poder usar para actualizar el estado de la computadora.
        this.contextoSimulacion.agregarEventoFinEsperaFormateo(this.computadoraActual);
        
        this.tiempoOcupacionTecnico = this.tiempoTrabajoInicialFormateo;

        this.acumTiempoOcupacionTecnico += this.tiempoOcupacionTecnico;
        this.proporcionOcupacionTecnico = this.acumTiempoOcupacionTecnico / minutoActual;

        //No se pierde la referencia, ya que tenemos el evento creado de "Fin espera de Formateo".
        //Tengamos en cuenta: en que momento se crea ese evento? Cuando termina la etapa? o cuando se va a formatear la pc?
        this.computadoraActual = null;
    }


    comenzarTrabajo(minutoActual, computadora) {
        this.estado = 'Ocupado';
        this.rndTrabajo = Math.random();
        this.trabajoRequerido = this.tablaTrabajos.valorRandom(this.rndTrabajo);
        
        this.computadoraActual = computadora;

        if (this.trabajoRequerido.descripcion === 'Formateo Disco') {

            this.setTrabajandoEn();

            let rndTiempoTotalFormateo = Math.random();
            let tiempoTotalFormateo = this.trabajoRequerido.obtenerTiempo(rndTiempoTotalFormateo);

            let tiempoFinEtapa1 = minutoActual + this.tiempoTrabajoInicialFormateo; 
            computadora.siendoArreglada();
                
            // El minuto en el cual la computadora va a dejar de estar en espera por el formateo.
            let tiempoFinEsperaFormateo = minutoActual + tiempoTotalFormateo - this.tiempoTrabajoFinalFormateo;
            computadora.setTiempoFinEsperaFormateo(tiempoFinEsperaFormateo);

            
            
            //En este metodo, rellenamos de los datos relacionados al evento de formateo. 
            //Para mantener consistencia, aqui es donde se van a mostrar el rnd utilizado y
            //el tiempo total.
            this.contextoSimulacion.actualizarEventoFormateo(rndTiempoTotalFormateo, tiempoTotalFormateo, tiempoFinEtapa1);




        }
        else {
            this.setTrabajandoEn();
            let rndTiempoTrabajo = Math.random();
            let tiempoTrabajo = this.trabajoRequerido.obtenerTiempo(rndTiempoTrabajo);
            computadora.siendoArreglada(minutoActual);

            //Actualizamos el evento de fin de arreglo.
            this.contextoSimulacion.actualizarEventoFinArreglo(minutoActual, rndTiempoTrabajo, tiempoTrabajo);
        }
    }

    iniciarEtapaFinal(minutoActual, computadoraFormateada) {

        this.estado = 'Ocupado';
        this.computadoraActual = computadoraFormateada;
        
        this.setTrabajandoEn()
        this.computadoraActual.siendoArreglada();
        //mandamos el minuto actual, el tiempo que tarda, y el nulo hace referencia a un RND,
        // pero en este caso, no se utiliza ningun numero aleatorio.
        this.contextoSimulacion.actualizarEventoFinArreglo(minutoActual, null, this.tiempoTrabajoFinalFormateo)

    }

    tieneEspacio() {
        return this.colaComputadorasPorArreglar.length <= 9;
    }

    hayCola() {
        return this.colaComputadorasPorArreglar.length > 0;
    }

    hayColaFormateados() {
        return this.colaComputadorasFormateadas.length > 0;
    }

    sacarDeColaFormateada() {
        return this.colaComputadorasFormateadas.shift()
    }

    sacarDeColaPorArreglar() {
        return this.colaComputadorasPorArreglar.shift()
    }

    limpiar() {
        this.rndTrabajo = null;
        this.trabajoRequerido = null;
        this.tiempoOcupacionTecnico = null;
    }

    setTrabajandoEn() {
        this.idComputadoraActual = this.computadoraActual.idComputadora;
        this.trabajoRequerido ?  this.trabajandoEn = this.trabajoRequerido.obtenerDescripcion() : this.trabajandoEn = "Terminando Formateo";
    }

}