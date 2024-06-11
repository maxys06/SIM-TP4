export async function simularLaboratorio(data) {
  /*
    const response = await fetch('/api/simular', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
    */
   return [
    {
      "reloj": 0,
      "evento": "Inicio de Simulacion",
      "eventoLlegadaComputadora": {
        "rnd": 0.8854272442382383,
        "tiempo": 83.12563465429429,
        "proxLlegada": 83.12563465429429
      },
      "eventoFinArreglo": {
        "rnd": null,
        "tiempo": null,
        "finArreglo": null
      },
      "eventoFinEtapa1": {
        "rnd": null,
        "tiempo": null,
        "finEtapa1": null
      },
      "arrayEventoFinEtapa2": [],
      "trabajo": {
        "rnd": null
      },
      "tecnico": {
        "estado": "Libre",
        "trabajandoEn": null,
        "colaComputadorasPorArreglar": 0,
        "colaComputadorasFormateadas": 0,
        "tiempoOcupacionTecnico": 0,
        "acumTiempoOcupacionTecnico": 0,
        "proporcionOcupacionTecnico": 0
      },
      "contadorComputadorasArregladas": 0,
      "tiempoPermanenciaPc": null,
      "acumTiempoPermanencia": 0,
      "tiempoPermanenciaPromedio": 0,
      "computadoras": []
    },
    {
      "reloj": 83.12563465429429,
      "evento": "Llegada Computadora",
      "eventoLlegadaComputadora": {
        "rnd": 0.6904980125718077,
        "tiempo": 71.42988075430846,
        "proxLlegada": 154.55551540860273
      },
      "eventoFinArreglo": {
        "rnd": 0.5779098815226791,
        "tiempo": 61.55819763045358,
        "finArreglo": 144.68383228474787
      },
      "eventoFinEtapa1": {
        "rnd": null,
        "tiempo": null,
        "finEtapa1": null
      },
      "arrayEventoFinEtapa2": [],
      "trabajo": {
        "rnd": 0.022653726000583907,
        "trabajoRequerido": "A: Cambio de Placa"
      },
      "tecnico": {
        "estado": "Ocupado",
        "trabajandoEn": "1 | A: Cambio de Placa",
        "colaComputadorasPorArreglar": 0,
        "colaComputadorasFormateadas": 0,
        "tiempoOcupacionTecnico": 0,
        "acumTiempoOcupacionTecnico": 0,
        "proporcionOcupacionTecnico": 0
      },
      "contadorComputadorasArregladas": 0,
      "tiempoPermanenciaPc": null,
      "acumTiempoPermanencia": 0,
      "tiempoPermanenciaPromedio": 0,
      "computadoras": [
        {
          "id": 1,
          "estado": "Siendo Arreglada",
          "tiempoLlegada": 83.12563465429429,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": 144.68383228474787
        }
      ]
    },
    {
      "reloj": 144.68383228474787,
      "evento": "Fin de Arreglo",
      "eventoLlegadaComputadora": {
        "rnd": null,
        "tiempo": null,
        "proxLlegada": 154.55551540860273
      },
      "eventoFinArreglo": {
        "rnd": null,
        "tiempo": null,
        "finArreglo": null
      },
      "eventoFinEtapa1": {
        "rnd": null,
        "tiempo": null,
        "finEtapa1": null
      },
      "arrayEventoFinEtapa2": [],
      "trabajo": {
        "rnd": null
      },
      "tecnico": {
        "estado": "Libre",
        "trabajandoEn": null,
        "colaComputadorasPorArreglar": 0,
        "colaComputadorasFormateadas": 0,
        "tiempoOcupacionTecnico": 61.55819763045358,
        "acumTiempoOcupacionTecnico": 61.55819763045358,
        "proporcionOcupacionTecnico": 0.4254670107804634
      },
      "contadorComputadorasArregladas": 1,
      "tiempoPermanenciaPc": 61.55819763045358,
      "acumTiempoPermanencia": 61.55819763045358,
      "tiempoPermanenciaPromedio": 61.55819763045358,
      "computadoras": []
    },
    {
      "reloj": 154.55551540860273,
      "evento": "Llegada Computadora",
      "eventoLlegadaComputadora": {
        "rnd": 0.9735618708743572,
        "tiempo": 88.41371225246144,
        "proxLlegada": 242.96922766106417
      },
      "eventoFinArreglo": {
        "rnd": 0.148743949822715,
        "tiempo": 52.9748789964543,
        "finArreglo": 207.53039440505702
      },
      "eventoFinEtapa1": {
        "rnd": null,
        "tiempo": null,
        "finEtapa1": null
      },
      "arrayEventoFinEtapa2": [],
      "trabajo": {
        "rnd": 0.2233214499976066,
        "trabajoRequerido": "A: Cambio de Placa"
      },
      "tecnico": {
        "estado": "Ocupado",
        "trabajandoEn": "2 | A: Cambio de Placa",
        "colaComputadorasPorArreglar": 0,
        "colaComputadorasFormateadas": 0,
        "tiempoOcupacionTecnico": null,
        "acumTiempoOcupacionTecnico": 61.55819763045358,
        "proporcionOcupacionTecnico": 0.4254670107804634
      },
      "contadorComputadorasArregladas": 1,
      "tiempoPermanenciaPc": null,
      "acumTiempoPermanencia": 61.55819763045358,
      "tiempoPermanenciaPromedio": 61.55819763045358,
      "computadoras": [
        {
          "id": 2,
          "estado": "Siendo Arreglada",
          "tiempoLlegada": 154.55551540860273,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": 207.53039440505702
        }
      ]
    },
    {
      "reloj": 207.53039440505702,
      "evento": "Fin de Arreglo",
      "eventoLlegadaComputadora": {
        "rnd": null,
        "tiempo": null,
        "proxLlegada": 242.96922766106417
      },
      "eventoFinArreglo": {
        "rnd": null,
        "tiempo": null,
        "finArreglo": null
      },
      "eventoFinEtapa1": {
        "rnd": null,
        "tiempo": null,
        "finEtapa1": null
      },
      "arrayEventoFinEtapa2": [],
      "trabajo": {
        "rnd": null
      },
      "tecnico": {
        "estado": "Libre",
        "trabajandoEn": null,
        "colaComputadorasPorArreglar": 0,
        "colaComputadorasFormateadas": 0,
        "tiempoOcupacionTecnico": 52.974878996454294,
        "acumTiempoOcupacionTecnico": 114.53307662690787,
        "proporcionOcupacionTecnico": 0.551885794633834
      },
      "contadorComputadorasArregladas": 2,
      "tiempoPermanenciaPc": 52.974878996454294,
      "acumTiempoPermanencia": 114.53307662690787,
      "tiempoPermanenciaPromedio": 57.266538313453935,
      "computadoras": []
    },
    {
      "reloj": 242.96922766106417,
      "evento": "Llegada Computadora",
      "eventoLlegadaComputadora": {
        "rnd": 0.9711588847493033,
        "tiempo": 88.2695330849582,
        "proxLlegada": 331.23876074602236
      },
      "eventoFinArreglo": {
        "rnd": 0.14784612564292487,
        "tiempo": 112.9569225128585,
        "finArreglo": 355.9261501739227
      },
      "eventoFinEtapa1": {
        "rnd": null,
        "tiempo": null,
        "finEtapa1": null
      },
      "arrayEventoFinEtapa2": [],
      "trabajo": {
        "rnd": 0.9291905401920342,
        "trabajoRequerido": "D: Agregar CD o DVD"
      },
      "tecnico": {
        "estado": "Ocupado",
        "trabajandoEn": "3 | D: Agregar CD o DVD",
        "colaComputadorasPorArreglar": 0,
        "colaComputadorasFormateadas": 0,
        "tiempoOcupacionTecnico": null,
        "acumTiempoOcupacionTecnico": 114.53307662690787,
        "proporcionOcupacionTecnico": 0.551885794633834
      },
      "contadorComputadorasArregladas": 2,
      "tiempoPermanenciaPc": null,
      "acumTiempoPermanencia": 114.53307662690787,
      "tiempoPermanenciaPromedio": 57.266538313453935,
      "computadoras": [
        {
          "id": 3,
          "estado": "Siendo Arreglada",
          "tiempoLlegada": 242.96922766106417,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": 355.9261501739227
        }
      ]
    },
    {
      "reloj": 331.23876074602236,
      "evento": "Llegada Computadora",
      "eventoLlegadaComputadora": {
        "rnd": 0.39993259084705746,
        "tiempo": 53.995955450823445,
        "proxLlegada": 385.2347161968458
      },
      "eventoFinArreglo": {
        "rnd": null,
        "tiempo": null,
        "finArreglo": 355.9261501739227
      },
      "eventoFinEtapa1": {
        "rnd": null,
        "tiempo": null,
        "finEtapa1": null
      },
      "arrayEventoFinEtapa2": [],
      "trabajo": {
        "rnd": null
      },
      "tecnico": {
        "estado": "Ocupado",
        "trabajandoEn": "3 | D: Agregar CD o DVD",
        "colaComputadorasPorArreglar": 1,
        "colaComputadorasFormateadas": 0,
        "tiempoOcupacionTecnico": null,
        "acumTiempoOcupacionTecnico": 114.53307662690787,
        "proporcionOcupacionTecnico": 0.551885794633834
      },
      "contadorComputadorasArregladas": 2,
      "tiempoPermanenciaPc": null,
      "acumTiempoPermanencia": 114.53307662690787,
      "tiempoPermanenciaPromedio": 57.266538313453935,
      "computadoras": [
        {
          "id": 3,
          "estado": "Siendo Arreglada",
          "tiempoLlegada": 242.96922766106417,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": 355.9261501739227
        },
        {
          "id": 4,
          "estado": "En espera",
          "tiempoLlegada": 331.23876074602236,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": null
        }
      ]
    },
    {
      "reloj": 355.9261501739227,
      "evento": "Fin de Arreglo",
      "eventoLlegadaComputadora": {
        "rnd": null,
        "tiempo": null,
        "proxLlegada": 385.2347161968458
      },
      "eventoFinArreglo": {
        "rnd": 0.857463533436662,
        "tiempo": 127.14927066873324,
        "finArreglo": 483.07542084265594
      },
      "eventoFinEtapa1": {
        "rnd": null,
        "tiempo": null,
        "finEtapa1": null
      },
      "arrayEventoFinEtapa2": [],
      "trabajo": {
        "rnd": 0.7858404330049555,
        "trabajoRequerido": "D: Agregar CD o DVD"
      },
      "tecnico": {
        "estado": "Ocupado",
        "trabajandoEn": "4 | D: Agregar CD o DVD",
        "colaComputadorasPorArreglar": 0,
        "colaComputadorasFormateadas": 0,
        "tiempoOcupacionTecnico": 112.95692251285851,
        "acumTiempoOcupacionTecnico": 227.48999913976638,
        "proporcionOcupacionTecnico": 0.6391494388052235
      },
      "contadorComputadorasArregladas": 3,
      "tiempoPermanenciaPc": 112.95692251285851,
      "acumTiempoPermanencia": 227.48999913976638,
      "tiempoPermanenciaPromedio": 75.82999971325546,
      "computadoras": [
        {
          "id": 4,
          "estado": "Siendo Arreglada",
          "tiempoLlegada": 331.23876074602236,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": 483.07542084265594
        }
      ]
    },
    {
      "reloj": 385.2347161968458,
      "evento": "Llegada Computadora",
      "eventoLlegadaComputadora": {
        "rnd": 0.9360470758085941,
        "tiempo": 86.16282454851566,
        "proxLlegada": 471.3975407453614
      },
      "eventoFinArreglo": {
        "rnd": null,
        "tiempo": null,
        "finArreglo": 483.07542084265594
      },
      "eventoFinEtapa1": {
        "rnd": null,
        "tiempo": null,
        "finEtapa1": null
      },
      "arrayEventoFinEtapa2": [],
      "trabajo": {
        "rnd": null
      },
      "tecnico": {
        "estado": "Ocupado",
        "trabajandoEn": "4 | D: Agregar CD o DVD",
        "colaComputadorasPorArreglar": 1,
        "colaComputadorasFormateadas": 0,
        "tiempoOcupacionTecnico": null,
        "acumTiempoOcupacionTecnico": 227.48999913976638,
        "proporcionOcupacionTecnico": 0.6391494388052235
      },
      "contadorComputadorasArregladas": 3,
      "tiempoPermanenciaPc": null,
      "acumTiempoPermanencia": 227.48999913976638,
      "tiempoPermanenciaPromedio": 75.82999971325546,
      "computadoras": [
        {
          "id": 4,
          "estado": "Siendo Arreglada",
          "tiempoLlegada": 331.23876074602236,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": 483.07542084265594
        },
        {
          "id": 5,
          "estado": "En espera",
          "tiempoLlegada": 385.2347161968458,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": null
        }
      ]
    },
    {
      "reloj": 471.3975407453614,
      "evento": "Llegada Computadora",
      "eventoLlegadaComputadora": {
        "rnd": 0.7528660244310346,
        "tiempo": 75.17196146586207,
        "proxLlegada": 546.5695022112235
      },
      "eventoFinArreglo": {
        "rnd": null,
        "tiempo": null,
        "finArreglo": 483.07542084265594
      },
      "eventoFinEtapa1": {
        "rnd": null,
        "tiempo": null,
        "finEtapa1": null
      },
      "arrayEventoFinEtapa2": [],
      "trabajo": {
        "rnd": null
      },
      "tecnico": {
        "estado": "Ocupado",
        "trabajandoEn": "4 | D: Agregar CD o DVD",
        "colaComputadorasPorArreglar": 2,
        "colaComputadorasFormateadas": 0,
        "tiempoOcupacionTecnico": null,
        "acumTiempoOcupacionTecnico": 227.48999913976638,
        "proporcionOcupacionTecnico": 0.6391494388052235
      },
      "contadorComputadorasArregladas": 3,
      "tiempoPermanenciaPc": null,
      "acumTiempoPermanencia": 227.48999913976638,
      "tiempoPermanenciaPromedio": 75.82999971325546,
      "computadoras": [
        {
          "id": 4,
          "estado": "Siendo Arreglada",
          "tiempoLlegada": 331.23876074602236,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": 483.07542084265594
        },
        {
          "id": 5,
          "estado": "En espera",
          "tiempoLlegada": 385.2347161968458,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": null
        },
        {
          "id": 6,
          "estado": "En espera",
          "tiempoLlegada": 471.3975407453614,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": null
        }
      ]
    },
    {
      "reloj": 483.07542084265594,
      "evento": "Fin de Arreglo",
      "eventoLlegadaComputadora": {
        "rnd": null,
        "tiempo": null,
        "proxLlegada": 546.5695022112235
      },
      "eventoFinArreglo": {
        "rnd": 0.3829753038400321,
        "tiempo": 57.65950607680064,
        "finArreglo": 540.7349269194566
      },
      "eventoFinEtapa1": {
        "rnd": null,
        "tiempo": null,
        "finEtapa1": null
      },
      "arrayEventoFinEtapa2": [],
      "trabajo": {
        "rnd": 0.06305721367158279,
        "trabajoRequerido": "A: Cambio de Placa"
      },
      "tecnico": {
        "estado": "Ocupado",
        "trabajandoEn": "5 | A: Cambio de Placa",
        "colaComputadorasPorArreglar": 1,
        "colaComputadorasFormateadas": 0,
        "tiempoOcupacionTecnico": 151.83666009663358,
        "acumTiempoOcupacionTecnico": 379.32665923639996,
        "proporcionOcupacionTecnico": 0.7852327874076451
      },
      "contadorComputadorasArregladas": 4,
      "tiempoPermanenciaPc": 151.83666009663358,
      "acumTiempoPermanencia": 379.32665923639996,
      "tiempoPermanenciaPromedio": 94.83166480909999,
      "computadoras": [
        {
          "id": 5,
          "estado": "Siendo Arreglada",
          "tiempoLlegada": 385.2347161968458,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": 540.7349269194566
        },
        {
          "id": 6,
          "estado": "En espera",
          "tiempoLlegada": 471.3975407453614,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": null
        }
      ]
    },
    {
      "reloj": 540.7349269194566,
      "evento": "Fin de Arreglo",
      "eventoLlegadaComputadora": {
        "rnd": null,
        "tiempo": null,
        "proxLlegada": 546.5695022112235
      },
      "eventoFinArreglo": {
        "rnd": 0.4683796115132708,
        "tiempo": 119.36759223026542,
        "finArreglo": 660.102519149722
      },
      "eventoFinEtapa1": {
        "rnd": null,
        "tiempo": null,
        "finEtapa1": null
      },
      "arrayEventoFinEtapa2": [],
      "trabajo": {
        "rnd": 0.8794759004581691,
        "trabajoRequerido": "D: Agregar CD o DVD"
      },
      "tecnico": {
        "estado": "Ocupado",
        "trabajandoEn": "6 | D: Agregar CD o DVD",
        "colaComputadorasPorArreglar": 0,
        "colaComputadorasFormateadas": 0,
        "tiempoOcupacionTecnico": 155.5002107226108,
        "acumTiempoOcupacionTecnico": 534.8268699590108,
        "proporcionOcupacionTecnico": 0.9890740237659443
      },
      "contadorComputadorasArregladas": 5,
      "tiempoPermanenciaPc": 155.5002107226108,
      "acumTiempoPermanencia": 534.8268699590108,
      "tiempoPermanenciaPromedio": 106.96537399180215,
      "computadoras": [
        {
          "id": 6,
          "estado": "Siendo Arreglada",
          "tiempoLlegada": 471.3975407453614,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": 660.102519149722
        }
      ]
    },
    {
      "reloj": 546.5695022112235,
      "evento": "Llegada Computadora",
      "eventoLlegadaComputadora": {
        "rnd": 0.18607291270904192,
        "tiempo": 41.164374762542515,
        "proxLlegada": 587.733876973766
      },
      "eventoFinArreglo": {
        "rnd": null,
        "tiempo": null,
        "finArreglo": 660.102519149722
      },
      "eventoFinEtapa1": {
        "rnd": null,
        "tiempo": null,
        "finEtapa1": null
      },
      "arrayEventoFinEtapa2": [],
      "trabajo": {
        "rnd": null
      },
      "tecnico": {
        "estado": "Ocupado",
        "trabajandoEn": "6 | D: Agregar CD o DVD",
        "colaComputadorasPorArreglar": 1,
        "colaComputadorasFormateadas": 0,
        "tiempoOcupacionTecnico": null,
        "acumTiempoOcupacionTecnico": 534.8268699590108,
        "proporcionOcupacionTecnico": 0.9890740237659443
      },
      "contadorComputadorasArregladas": 5,
      "tiempoPermanenciaPc": null,
      "acumTiempoPermanencia": 534.8268699590108,
      "tiempoPermanenciaPromedio": 106.96537399180215,
      "computadoras": [
        {
          "id": 6,
          "estado": "Siendo Arreglada",
          "tiempoLlegada": 471.3975407453614,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": 660.102519149722
        },
        {
          "id": 7,
          "estado": "En espera",
          "tiempoLlegada": 546.5695022112235,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": null
        }
      ]
    },
    {
      "reloj": 587.733876973766,
      "evento": "Llegada Computadora",
      "eventoLlegadaComputadora": {
        "rnd": 0.7413878317720124,
        "tiempo": 74.48326990632074,
        "proxLlegada": 662.2171468800867
      },
      "eventoFinArreglo": {
        "rnd": null,
        "tiempo": null,
        "finArreglo": 660.102519149722
      },
      "eventoFinEtapa1": {
        "rnd": null,
        "tiempo": null,
        "finEtapa1": null
      },
      "arrayEventoFinEtapa2": [],
      "trabajo": {
        "rnd": null
      },
      "tecnico": {
        "estado": "Ocupado",
        "trabajandoEn": "6 | D: Agregar CD o DVD",
        "colaComputadorasPorArreglar": 2,
        "colaComputadorasFormateadas": 0,
        "tiempoOcupacionTecnico": null,
        "acumTiempoOcupacionTecnico": 534.8268699590108,
        "proporcionOcupacionTecnico": 0.9890740237659443
      },
      "contadorComputadorasArregladas": 5,
      "tiempoPermanenciaPc": null,
      "acumTiempoPermanencia": 534.8268699590108,
      "tiempoPermanenciaPromedio": 106.96537399180215,
      "computadoras": [
        {
          "id": 6,
          "estado": "Siendo Arreglada",
          "tiempoLlegada": 471.3975407453614,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": 660.102519149722
        },
        {
          "id": 7,
          "estado": "En espera",
          "tiempoLlegada": 546.5695022112235,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": null
        },
        {
          "id": 8,
          "estado": "En espera",
          "tiempoLlegada": 587.733876973766,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": null
        }
      ]
    },
    {
      "reloj": 660.102519149722,
      "evento": "Fin de Arreglo",
      "eventoLlegadaComputadora": {
        "rnd": null,
        "tiempo": null,
        "proxLlegada": 662.2171468800867
      },
      "eventoFinArreglo": {
        "rnd": null,
        "tiempo": null,
        "finArreglo": null
      },
      "eventoFinEtapa1": {
        "rnd": 0.20888902457323266,
        "tiempo": 94.17778049146466,
        "finEtapa1": 675.102519149722
      },
      "arrayEventoFinEtapa2": [],
      "trabajo": {
        "rnd": 0.6727118782573587,
        "trabajoRequerido": "C: Formateo Disco"
      },
      "tecnico": {
        "estado": "Ocupado",
        "trabajandoEn": "7 | C: Formateando disco Etapa 1",
        "colaComputadorasPorArreglar": 1,
        "colaComputadorasFormateadas": 0,
        "tiempoOcupacionTecnico": 188.70497840436053,
        "acumTiempoOcupacionTecnico": 723.5318483633713,
        "proporcionOcupacionTecnico": 1.0960901183885083
      },
      "contadorComputadorasArregladas": 6,
      "tiempoPermanenciaPc": 188.70497840436053,
      "acumTiempoPermanencia": 723.5318483633713,
      "tiempoPermanenciaPromedio": 120.58864139389522,
      "computadoras": [
        {
          "id": 7,
          "estado": "Siendo Arreglada",
          "tiempoLlegada": 546.5695022112235,
          "tiempoFinEspera": 739.2802996411866,
          "tiempoFinArreglo": null
        },
        {
          "id": 8,
          "estado": "En espera",
          "tiempoLlegada": 587.733876973766,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": null
        }
      ]
    },
    {
      "reloj": 662.2171468800867,
      "evento": "Llegada Computadora",
      "eventoLlegadaComputadora": {
        "rnd": 0.2534820854987683,
        "tiempo": 45.2089251299261,
        "proxLlegada": 707.4260720100128
      },
      "eventoFinArreglo": {
        "rnd": null,
        "tiempo": null,
        "finArreglo": null
      },
      "eventoFinEtapa1": {
        "rnd": null,
        "tiempo": null,
        "finEtapa1": 675.102519149722
      },
      "arrayEventoFinEtapa2": [],
      "trabajo": {
        "rnd": null
      },
      "tecnico": {
        "estado": "Ocupado",
        "trabajandoEn": "7 | C: Formateando disco Etapa 1",
        "colaComputadorasPorArreglar": 2,
        "colaComputadorasFormateadas": 0,
        "tiempoOcupacionTecnico": null,
        "acumTiempoOcupacionTecnico": 723.5318483633713,
        "proporcionOcupacionTecnico": 1.0960901183885083
      },
      "contadorComputadorasArregladas": 6,
      "tiempoPermanenciaPc": null,
      "acumTiempoPermanencia": 723.5318483633713,
      "tiempoPermanenciaPromedio": 120.58864139389522,
      "computadoras": [
        {
          "id": 7,
          "estado": "Siendo Arreglada",
          "tiempoLlegada": 546.5695022112235,
          "tiempoFinEspera": 739.2802996411866,
          "tiempoFinArreglo": null
        },
        {
          "id": 8,
          "estado": "En espera",
          "tiempoLlegada": 587.733876973766,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": null
        },
        {
          "id": 9,
          "estado": "En espera",
          "tiempoLlegada": 662.2171468800867,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": null
        }
      ]
    },
    {
      "reloj": 675.102519149722,
      "evento": "Fin de Etapa1",
      "eventoLlegadaComputadora": {
        "rnd": null,
        "tiempo": null,
        "proxLlegada": 707.4260720100128
      },
      "eventoFinArreglo": {
        "rnd": 0.07927860111118434,
        "tiempo": 71.58557202222369,
        "finArreglo": 746.6880911719456
      },
      "eventoFinEtapa1": {
        "rnd": null,
        "tiempo": null,
        "finEtapa1": null
      },
      "arrayEventoFinEtapa2": [
        {
          "tiempo": 739.2802996411866,
          "computadora": 7
        }
      ],
      "trabajo": {
        "rnd": 0.3092407261568675,
        "trabajoRequerido": "B: Ampliacion Memoria"
      },
      "tecnico": {
        "estado": "Ocupado",
        "trabajandoEn": "8 | B: Ampliacion Memoria",
        "colaComputadorasPorArreglar": 1,
        "colaComputadorasFormateadas": 0,
        "tiempoOcupacionTecnico": 15,
        "acumTiempoOcupacionTecnico": 738.5318483633713,
        "proporcionOcupacionTecnico": 0.02221884761871752
      },
      "contadorComputadorasArregladas": 6,
      "tiempoPermanenciaPc": null,
      "acumTiempoPermanencia": 723.5318483633713,
      "tiempoPermanenciaPromedio": 120.58864139389522,
      "computadoras": [
        {
          "id": 7,
          "estado": "Siendo Formateada",
          "tiempoLlegada": 546.5695022112235,
          "tiempoFinEspera": 739.2802996411866,
          "tiempoFinArreglo": null
        },
        {
          "id": 8,
          "estado": "Siendo Arreglada",
          "tiempoLlegada": 587.733876973766,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": 746.6880911719456
        },
        {
          "id": 9,
          "estado": "En espera",
          "tiempoLlegada": 662.2171468800867,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": null
        }
      ]
    },
    {
      "reloj": 707.4260720100128,
      "evento": "Llegada Computadora",
      "eventoLlegadaComputadora": {
        "rnd": 0.35196256706679163,
        "tiempo": 51.117754024007496,
        "proxLlegada": 758.5438260340203
      },
      "eventoFinArreglo": {
        "rnd": null,
        "tiempo": null,
        "finArreglo": 746.6880911719456
      },
      "eventoFinEtapa1": {
        "rnd": null,
        "tiempo": null,
        "finEtapa1": null
      },
      "arrayEventoFinEtapa2": [
        {
          "tiempo": 739.2802996411866,
          "computadora": 7
        }
      ],
      "trabajo": {
        "rnd": null
      },
      "tecnico": {
        "estado": "Ocupado",
        "trabajandoEn": "8 | B: Ampliacion Memoria",
        "colaComputadorasPorArreglar": 2,
        "colaComputadorasFormateadas": 0,
        "tiempoOcupacionTecnico": null,
        "acumTiempoOcupacionTecnico": 738.5318483633713,
        "proporcionOcupacionTecnico": 0.02221884761871752
      },
      "contadorComputadorasArregladas": 6,
      "tiempoPermanenciaPc": null,
      "acumTiempoPermanencia": 723.5318483633713,
      "tiempoPermanenciaPromedio": 120.58864139389522,
      "computadoras": [
        {
          "id": 7,
          "estado": "Siendo Formateada",
          "tiempoLlegada": 546.5695022112235,
          "tiempoFinEspera": 739.2802996411866,
          "tiempoFinArreglo": null
        },
        {
          "id": 8,
          "estado": "Siendo Arreglada",
          "tiempoLlegada": 587.733876973766,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": 746.6880911719456
        },
        {
          "id": 9,
          "estado": "En espera",
          "tiempoLlegada": 662.2171468800867,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": null
        },
        {
          "id": 10,
          "estado": "En espera",
          "tiempoLlegada": 707.4260720100128,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": null
        }
      ]
    },
    {
      "reloj": 739.2802996411866,
      "evento": "Fin de Etapa2",
      "eventoLlegadaComputadora": {
        "rnd": null,
        "tiempo": null,
        "proxLlegada": 758.5438260340203
      },
      "eventoFinArreglo": {
        "rnd": null,
        "tiempo": null,
        "finArreglo": 746.6880911719456
      },
      "eventoFinEtapa1": {
        "rnd": null,
        "tiempo": null,
        "finEtapa1": null
      },
      "arrayEventoFinEtapa2": [],
      "trabajo": {
        "rnd": null
      },
      "tecnico": {
        "estado": "Ocupado",
        "trabajandoEn": "8 | B: Ampliacion Memoria",
        "colaComputadorasPorArreglar": 2,
        "colaComputadorasFormateadas": 1,
        "tiempoOcupacionTecnico": null,
        "acumTiempoOcupacionTecnico": 738.5318483633713,
        "proporcionOcupacionTecnico": 0.02221884761871752
      },
      "contadorComputadorasArregladas": 6,
      "tiempoPermanenciaPc": null,
      "acumTiempoPermanencia": 723.5318483633713,
      "tiempoPermanenciaPromedio": 120.58864139389522,
      "computadoras": [
        {
          "id": 7,
          "estado": "Formateado en espera",
          "tiempoLlegada": 546.5695022112235,
          "tiempoFinEspera": 739.2802996411866,
          "tiempoFinArreglo": null
        },
        {
          "id": 8,
          "estado": "Siendo Arreglada",
          "tiempoLlegada": 587.733876973766,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": 746.6880911719456
        },
        {
          "id": 9,
          "estado": "En espera",
          "tiempoLlegada": 662.2171468800867,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": null
        },
        {
          "id": 10,
          "estado": "En espera",
          "tiempoLlegada": 707.4260720100128,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": null
        }
      ]
    },
    {
      "reloj": 746.6880911719456,
      "evento": "Fin de Arreglo",
      "eventoLlegadaComputadora": {
        "rnd": null,
        "tiempo": null,
        "proxLlegada": 758.5438260340203
      },
      "eventoFinArreglo": {
        "rnd": null,
        "tiempo": 15,
        "finArreglo": 761.6880911719456
      },
      "eventoFinEtapa1": {
        "rnd": null,
        "tiempo": null,
        "finEtapa1": null
      },
      "arrayEventoFinEtapa2": [],
      "trabajo": {
        "rnd": null
      },
      "tecnico": {
        "estado": "Ocupado",
        "trabajandoEn": "7 | C: Etapa final",
        "colaComputadorasPorArreglar": 2,
        "colaComputadorasFormateadas": 0,
        "tiempoOcupacionTecnico": 158.95421419817967,
        "acumTiempoOcupacionTecnico": 897.486062561551,
        "proporcionOcupacionTecnico": 1.2019557740005256
      },
      "contadorComputadorasArregladas": 7,
      "tiempoPermanenciaPc": 158.95421419817967,
      "acumTiempoPermanencia": 882.486062561551,
      "tiempoPermanenciaPromedio": 126.069437508793,
      "computadoras": [
        {
          "id": 7,
          "estado": "Siendo Arreglada",
          "tiempoLlegada": 546.5695022112235,
          "tiempoFinEspera": 739.2802996411866,
          "tiempoFinArreglo": 761.6880911719456
        },
        {
          "id": 9,
          "estado": "En espera",
          "tiempoLlegada": 662.2171468800867,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": null
        },
        {
          "id": 10,
          "estado": "En espera",
          "tiempoLlegada": 707.4260720100128,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": null
        }
      ]
    },
    {
      "reloj": 758.5438260340203,
      "evento": "Llegada Computadora",
      "eventoLlegadaComputadora": {
        "rnd": 0.7694035222050679,
        "tiempo": 76.16421133230408,
        "proxLlegada": 834.7080373663243
      },
      "eventoFinArreglo": {
        "rnd": null,
        "tiempo": null,
        "finArreglo": 761.6880911719456
      },
      "eventoFinEtapa1": {
        "rnd": null,
        "tiempo": null,
        "finEtapa1": null
      },
      "arrayEventoFinEtapa2": [],
      "trabajo": {
        "rnd": null
      },
      "tecnico": {
        "estado": "Ocupado",
        "trabajandoEn": "7 | C: Etapa final",
        "colaComputadorasPorArreglar": 3,
        "colaComputadorasFormateadas": 0,
        "tiempoOcupacionTecnico": null,
        "acumTiempoOcupacionTecnico": 897.486062561551,
        "proporcionOcupacionTecnico": 1.2019557740005256
      },
      "contadorComputadorasArregladas": 7,
      "tiempoPermanenciaPc": null,
      "acumTiempoPermanencia": 882.486062561551,
      "tiempoPermanenciaPromedio": 126.069437508793,
      "computadoras": [
        {
          "id": 7,
          "estado": "Siendo Arreglada",
          "tiempoLlegada": 546.5695022112235,
          "tiempoFinEspera": 739.2802996411866,
          "tiempoFinArreglo": 761.6880911719456
        },
        {
          "id": 9,
          "estado": "En espera",
          "tiempoLlegada": 662.2171468800867,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": null
        },
        {
          "id": 10,
          "estado": "En espera",
          "tiempoLlegada": 707.4260720100128,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": null
        },
        {
          "id": 11,
          "estado": "En espera",
          "tiempoLlegada": 758.5438260340203,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": null
        }
      ]
    },
    {
      "reloj": 761.6880911719456,
      "evento": "Fin de Arreglo",
      "eventoLlegadaComputadora": {
        "rnd": null,
        "tiempo": null,
        "proxLlegada": 834.7080373663243
      },
      "eventoFinArreglo": {
        "rnd": 0.5470897066761973,
        "tiempo": 80.94179413352394,
        "finArreglo": 842.6298853054695
      },
      "eventoFinEtapa1": {
        "rnd": null,
        "tiempo": null,
        "finEtapa1": null
      },
      "arrayEventoFinEtapa2": [],
      "trabajo": {
        "rnd": 0.374671668293884,
        "trabajoRequerido": "B: Ampliacion Memoria"
      },
      "tecnico": {
        "estado": "Ocupado",
        "trabajandoEn": "9 | B: Ampliacion Memoria",
        "colaComputadorasPorArreglar": 2,
        "colaComputadorasFormateadas": 0,
        "tiempoOcupacionTecnico": 15,
        "acumTiempoOcupacionTecnico": 912.486062561551,
        "proporcionOcupacionTecnico": 1.1979786386808084
      },
      "contadorComputadorasArregladas": 8,
      "tiempoPermanenciaPc": 215.11858896072215,
      "acumTiempoPermanencia": 1097.6046515222731,
      "tiempoPermanenciaPromedio": 137.20058144028414,
      "computadoras": [
        {
          "id": 9,
          "estado": "Siendo Arreglada",
          "tiempoLlegada": 662.2171468800867,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": 842.6298853054695
        },
        {
          "id": 10,
          "estado": "En espera",
          "tiempoLlegada": 707.4260720100128,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": null
        },
        {
          "id": 11,
          "estado": "En espera",
          "tiempoLlegada": 758.5438260340203,
          "tiempoFinEspera": null,
          "tiempoFinArreglo": null
        }
      ]
    }
  ];
}
