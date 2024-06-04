import generadorUniforme from "../GeneradorUniforme.js";

export class Trabajo{
    constructor(desviacion, tiempo, trabajo ,probabilidad, lInf, lSup){
        this.desviacion = desviacion;
        this.tiempo = tiempo;
        this.descripcion = trabajo;
        this.probabilidad = probabilidad;
        this.lInf= lInf;
        this.lSup = lSup;
    }

    obtenerTiempo(rnd) {
        return generadorUniforme.generarDistribucionUniforme(this.tiempo - this.desviacion, this.tiempo + this.desviacion, rnd);
    }
}
