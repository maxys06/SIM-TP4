import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import qs from 'qs';

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
app.post('/reparacionComputadoras', async (req, res) => {
  try{
    res.json(null);
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error de Servidor' });
  }
});


app.listen(port, () => {
  console.log(`Inventario de Bicicletas escuchando en ${port}`)
})