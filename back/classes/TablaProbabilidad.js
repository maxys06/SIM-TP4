import { Trabajo } from "./Trabajo.js";

export class TablaProbabilidad {
    constructor(desviacion, array){
        this.filas = this.obtenerFilas(desviacion, array);
        // Usar 'this' para llamar al método dentro de la misma clase
    }
    obtenerFilas(desviacion, ArrayFilas) {
        let filas = [];
        let limInf = 0; // Declarar limInf para evitar errores de referencia
        let limSup = 0;

        //Variable TEMPORAL para almacenar limSupAnterior
        let limSupAnterior = 0;
        let limInfAnterior = 0;
        for (let i = 0; i < ArrayFilas.length; i++) {
            let valor = ArrayFilas[i].valor;
            let probabilidadAsociada = ArrayFilas[i].probabilidad;
            
            if (i > 0) {
                limInf = limInfAnterior + ArrayFilas[i - 1].probabilidad; // Asignar limInf correctamente
                limInfAnterior = limInf
                limSup = limSupAnterior + ArrayFilas[i].probabilidad;
                limSupAnterior = limSup;
                console.log(i ,limInf , limSup)
            }
            else 
            {
            limSup = ArrayFilas[i].probabilidad;
            limSupAnterior = limSup;
            }
            
            filas.push(new Trabajo(desviacion, valor.tiempo, valor.trabajo, probabilidadAsociada, parseFloat(limInf.toFixed(4)), parseFloat(limSup.toFixed(4))));
        }
        
        return filas;
    }

    valorRandom(rnd){
        for (const fila of this.filas){
            if (rnd >= fila.lInf && rnd < fila.lSup){
                return fila;                
            }
        }
    }
}
