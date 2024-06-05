export class EventoFinEtapa1 {

    constructor(tecnico) {
        this.rnd = null;
        this.tiempo = null;
        this.tiempoOcurrencia = null;
        this.tecnico = tecnico
    }

    actualizar(rnd, tiempoTotal, tiempoOcurrencia) {
        this.rnd = rnd;
        this.tiempo = tiempoTotal;
        this.tiempoOcurrencia = tiempoOcurrencia;
    }

    disparar(minutoActual) {

        this.rnd = null;
        this.tiempo = null;
        this.tiempoOcurrencia = null;
        
        //Misma funcionalidad que finalizarArreglo
        this.tecnico.terminarEtapa1(minutoActual);


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

    getTiempoOcurrencia() {
        return this.tiempoOcurrencia
    }

    limpiar() {
        this.rnd = null;
        this.tiempo = null;
    }



    getDescripcion(){
        return "Fin de Etapa1"
    }


}