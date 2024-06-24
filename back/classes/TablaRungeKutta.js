/*
estructura filas: 

[{
            t: t,
            cActual,
            t_h_2: t + h/2,
            tSiguiente: t + h,
            k1: f(t),
            c_k1: c + h/2*k1,
            k2: f(t+h/2, c+h/2*k1),
            c_k2: c + h/2*k2,
            k3: f(t+h/2, c+h/2*k2),
            c_k3: c + h/2*k3,
            k4: f(t+h, c+h*k2),
            cSiguiente: c + h/6*(k1 + 2*k2 + 2*k3 + k4),
            usado: false
}]

*/

import generadorUniforme from "../GeneradorUniforme.js";

export class TablaRungeKutta {
    constructor(limiteInferior, limiteSuperior, constanteA, coeficienteB) {
        this.limiteInferior = limiteInferior; //Estos son los valores de C que son posibles.
        this.limiteSuperior = limiteSuperior; //
        this.constanteA = constanteA;
        this.coeficienteB = coeficienteB;
        this.h = 0.1
        this.arrayFilas = [];
    
    }

    generarTablaRungeKutta() {
        let tInicial = 0;
        let cInicial = 0;

        let filaAnterior = this.generarFila(tInicial, cInicial);
        let filaSiguiente = null;
        this.arrayFilas.push(filaAnterior);

        while (filaAnterior.cActual <= this.limiteSuperior) {
            filaSiguiente = this.generarFila(filaAnterior.tSiguiente, filaAnterior.cSiguiente);
            this.arrayFilas.push(filaSiguiente);
            filaAnterior = filaSiguiente;
        }
    }

    generarFila(t, c) {        
        
        let h = this.h

        let t_h_2 = t + h / 2;
        let t_h = t + h;

        let k1 = this.calcularFx(t);

        let c_k1 = c + (h / 2)*k1;

        let k2 = this.calcularFx(t_h_2);
        let c_k2 = c + (h/2)*k2;

        let k3 = this.calcularFx(t_h_2);
        let c_k3 = c + h*k3;

        let k4 = this.calcularFx(t_h);
        let c_siguiente = c + (h/6)*(k1 + 2*k2 + 2*k3 + k4);

        return {
            t: t,
            cActual: c,
            t_h_2: t_h_2,
            tSiguiente: t_h,
            k1: k1,
            c_k1: c_k1,
            k2: k2,
            c_k2: c_k2,
            k3: k3,
            c_k3: c_k3,
            k4: k4,
            cSiguiente: c_siguiente,
            usado: false
        }


    }

    calcularFx(t) {
        let derivada = this.constanteA + Math.exp(this.coeficienteB*t);
        return derivada;
    }

    buscarMinutos(cantidadSectores) {
        for(let i=0; i <= this.arrayFilas.length - 1; i++) {
            if(this.arrayFilas[i].cActual >= cantidadSectores) {
                this.arrayFilas[i].usado = true;
                return this.arrayFilas[i].t
            }
        }
        throw new Error("No se ha computado ese sector para la tabla runge kutta");
    }

    calcularCantidadSectores(rnd) {
        let c = generadorUniforme.generarDistribucionUniforme(this.limiteInferior, this.limiteSuperior, rnd);
        return c;
    }

}