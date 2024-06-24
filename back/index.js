import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import qs from 'qs';
import { GestorSimulacion } from './classes/GestorSimulacion.js';
import { TablaRungeKutta } from './classes/TablaRungeKutta.js';

const port = 5174;
const app = express();
const tabla = null;




// Definicion de Middlewares
app.use(bodyParser.json());
app.use(cors());
app.set('query parser',
  (str) => qs.parse(str))

app.get('/', (req, res) => {
  res.send("Hello World");
})

// Endpoints
app.post('/api/simulacion', async (req, res) => {
  try{

    console.log(      req.body.x,
      req.body.numeroIteraciones,
      req.body.minutoDesde,
      req.body.desviacion,
      req.body.cambioPlaca,
      req.body.ampliacionMemoria,
      req.body.formateoDisco,
      req.body.agregarCdoDvd,
      req.body.tiempoTrabajoInicialFormateo,
      req.body.tiempoTrabajoFinalFormateo,
      req.body.limiteInferiorSector,
      req.body.limiteSuperiorSector,
      req.body.constanteA,
      req.body.coeficienteB,
    
    )

    tabla = new TablaRungeKutta(Number(req.body.limiteInferiorSector), Number(req.body.limiteSuperiorSector), Number(req.body.constanteA), Number(req.body.coeficienteB));
    tabla.generarTablaRungeKutta();

    /*
    Validamos que el tiempo maximo de duracion de runge kutta, no supere el tiempo de (formateoDisco - desviacion) / 2
    Esto es para que si el formateo disco es de X horas, entonces el tecnico pueda estar ocupado con la computadora, como maximo 3 horas.
    */
    
    if(tabla.arrayFilas[tabla.arrayFilas.length - 1].t  > (Number(req.body.formateoDisco.tiempo) - Number(req.body.desviacion))/2) {
      throw new Error("Error en el envio de parametros")
    }

    
    let gestor = new GestorSimulacion(
      req.body.x,
      req.body.numeroIteraciones,
      req.body.minutoDesde,
      req.body.desviacion,
      req.body.cambioPlaca,
      req.body.ampliacionMemoria,
      req.body.formateoDisco,
      req.body.agregarCdoDvd,
      req.body.tiempoTrabajoInicialFormateo,
      req.body.tiempoTrabajoFinalFormateo,
      tabla
    )
    
    let response = gestor.iniciarSimulacion();

    res.json(response);

    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error de Servidor', message: error });
  }
});




app.listen(port, () => {
  console.log(`Inventario de Bicicletas escuchando en ${port}`)
})