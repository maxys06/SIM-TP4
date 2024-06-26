export async function simularLaboratorio(data) {
  console.log(data);
  const response = await fetch('http://localhost:5174/api/simulacion', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  console.log(response.status);
  if (response.status === 400) {
    throw new Error('Error de Parametros');
  }

  if (!response.ok) {
    throw new Error('Error en la solicitud');
  }

  let responseData = await response.json();
  console.log(responseData);
  responseData.ultimaFilaVecEstado.forEach(element => { element.computadoras = [] });
  return responseData;
}
export async function obtenerxlsx(){
    const response = await fetch('http://localhost:5174/api/generar-xls', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.blob()
}