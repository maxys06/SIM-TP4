import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import qs from 'qs';
import { GestorSimulacion } from './classes/GestorSimulacion.js';
import { TablaRungeKutta } from './classes/TablaRungeKutta.js';

import ExcelJS from 'exceljs'

const port = 5174;
const app = express();
let tabla = null;




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

    console.log(req.body.x,
      req.body.numeroIteraciones,
      req.body.minutoDesde,
      req.body.desviacion,
      req.body.cambioPlaca,
      req.body.ampliacionMemoria,
      req.body.formateoDisco,
      req.body.agregarCdoDvd,
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
      tabla
    )
    
    let response = gestor.iniciarSimulacion();

    res.json(response);

    
  } catch (error) {
    console.error('Error:', error);
    res.status(400).json({ error: 'Error de Servidor', message: error });
  }
});

app.post('/api/generar-xls', (req, res) => {
  console.log(tabla)
  const { arrayFilas } = tabla;
  

  // Crear un nuevo libro de Excel
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Datos');

  // Definir las cabeceras de las columnas
  worksheet.columns = [
    { header: 'Minutos', key: 't', width: 10 },
    { header: 'Sectores C', key: 'cActual', width: 15 },
    { header: 't + h/2', key: 't_h_2', width: 10 },
    { header: 't + h', key: 'tSiguiente', width: 10 },
    { header: 'f(t)', key: 'k1', width: 10},
    { header: 'c + h/2*k1', key: 'c_k1', width: 15 },
    { header: 'f(t+h/2, c+h/2*k1)', key: 'k2', width: 20},
    { header: 'c + h/2*k2', key: 'c_k2', width: 15},
    { header: 'f(t+h/2, c+h/2*k2)', key: 'k3', width: 20},
    { header: 'c + h/2*k3', key: 'c_k3', width: 15},
    { header: 'f(t+h, c+h*k2)', key: 'k4', width: 15},
    { header: 'c + h/6*(k1 + 2*k2 + 2*k3 + k4)', key: 'cSiguiente', width: 30 },
    { header: 'Usado', key: 'usado', width: 10}
  ];

  // Añadir las filas
  // Establecer color de fondo para las cabeceras
  worksheet.getRow(1).eachCell((cell) => {
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFFF00' } // Color de fondo amarillo
    };
  });

  // Añadir las filas
  arrayFilas.forEach(fila => {
    const nuevaFila = worksheet.addRow(fila);
    if (fila.usado) {
      nuevaFila.eachCell((cell) => {
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FFFF00' } // Color de fondo amarillo
        };
      });
    }
  });

  // Configurar la respuesta para descargar el archivo
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader('Content-Disposition', 'attachment; filename=datos.xlsx');

  workbook.xlsx.write(res)
    .then(() => {
      res.end();
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});





app.listen(port, () => {
  console.log(`Inventario de Bicicletas escuchando en ${port}`)
})