import { TablaProbabilidad } from "./classes/TablaProbabilidad.js";
import { GestorSimulacion } from "./classes/GestorSimulacion.js";

/*let {cambioPlaca, ampliacionMemoria, formateoDisco, agregarCdoDvd} = {
    cambioPlaca: {
        probabilidad: 0.2,
        tiempo: 1
    },
    ampliacionMemoria: {
        probabilidad: 0.2,
        tiempo: 2
    },
    formateoDisco: {
        probabilidad: 0.2,
        tiempo: 3
    },
    agregarCdoDvd: {
        probabilidad: 0.2,
        tiempo: 4
    }
}

let tabla = new TablaProbabilidad(5, [
    {valor: {tiempo: cambioPlaca.tiempo, trabajo: "A: Cambio de Placa"}, probabilidad: cambioPlaca.probabilidad},
    {valor: {tiempo: ampliacionMemoria.tiempo, trabajo: "B: Ampliacion Memoria"}, probabilidad: ampliacionMemoria.probabilidad},
    {valor: {tiempo: formateoDisco.tiempo, trabajo: "C: Formateo Disco"}, probabilidad: formateoDisco.probabilidad},
    {valor: {tiempo: agregarCdoDvd.tiempo, trabajo: "D: Agregar CD o DVD"}, probabilidad: agregarCdoDvd.probabilidad}]);

console.log(tabla);

let rnd = 0.5;

let trabajo = tabla.valorRandom(rnd);
console.log(trabajo);

let tiempo = trabajo.obtenerTiempo(rnd);
console.log(tiempo);*/

let gestor = new GestorSimulacion(1, 1, 1, 10, {tiempo: 60, probabilidad: 0.25}, {tiempo: 80, probabilidad: 0.25}, {tiempo: 100, probabilidad: 0.25}, {tiempo: 120, probabilidad: 0.25}, 15, 15);
gestor.test();