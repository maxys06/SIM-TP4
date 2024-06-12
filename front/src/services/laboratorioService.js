export async function simularLaboratorio(data) {
    const response = await fetch('http://localhost:5174/api/simulacion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    let responseData = await response.json()
    console.log(responseData)
    responseData.ultimaFilaVecEstado.forEach(element => { element.computadoras = []});
    return await responseData
  }
