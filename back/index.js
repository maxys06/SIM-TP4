import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import qs from 'qs';
import { GestorSimulacion } from './classes/GestorSimulacion';

const port = 5174;
const app = express();


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
    
    let gestor = new GestorSimulacion(
      req.body.x,
      req.body.numeroIteraciones,
      req.body.minutoDesde,
      req.body.desviacion,
      req.body.cambioPlaca,
      req.body.ampliacionMemoria,
      req.body.formateoDisco,
      req.body.agregarCdoDvd,
      req.body.trabajoInicialFormateo,
      req.body.trabajoFinalFormateo,
    )

    let response = gestor.iniciarSimulacion();

    res.json(response);

    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error de Servidor' });
  }
});


app.listen(port, () => {
  console.log(`Inventario de Bicicletas escuchando en ${port}`)
})