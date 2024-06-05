
export class EventoFinArreglo{

    constructor(tecnico) {
        this.rnd = null;
        this.tiempo = null;
        this.finArreglo = null;
        this.tecnico = tecnico;

    }

    actualizar(minutoActual, rnd, tiempoTrabajo) {
        this.rnd = rnd;
        this.tiempo = tiempoTrabajo;
        this.finArreglo = minutoActual + tiempoTrabajo;
    }

    disparar(minutoActual) {
        // Seteamos en nulo los valores que tenia previamente el evento
        this.rnd = null;
        this.tiempo = null;
        this.finArreglo = null;

        //Aqui, nosotros cambiamos el estado de la computadora y actualizamos las estadisticas relacionadas.
        this.tecnico.finalizarArreglo(minutoActual);

        if(this.tecnico.hayColaFormateados()) {
            let computadoraFormateada = this.tecnico.sacarDeColaFormateada()
            this.tecnico.iniciarEtapaFinal(minutoActual, computadoraFormateada);
        }
        else {
            if (this.tecnico.hayCola()){
                let computadora = this.tecnico.sacarDeColaPorArreglar();
                this.tecnico.comenzarTrabajo(minutoActual, computadora);
            }
            else {
                this.tecnico.liberar();
            }
    }
    } 

    limpiar() {
        this.rnd = null;
        this.tiempo = null;
        
    }

    getTiempoOcurrencia() {
        return this.finArreglo;
    }


    getDescripcion(){
        return "Fin de Arreglo"
    }


}