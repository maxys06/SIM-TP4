import { useForm } from 'react-hook-form';
import styles from './Menu.module.css';
import { useState } from 'react';
import { Fieldset, Input } from '../FormComponents/FormComponents';
import { simularLaboratorio } from '../../services/laboratorioService';
import { ResultScreen } from '../ResultScreen/ResultScreen';

export function Menu() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      tiempoX: 0,
      cantidadIteraciones: 0,
      minutoDesde: 0,
      cambioPlaca: {
          probabilidad: 0,
          tiempo: 0
      },
      ampliacionMemoria: {
          probabilidad: 0,
          tiempo: 0
      },
      formateoDisco: {
          probabilidad: 0,
          tiempo: 0
      },
      agregarCdoDvd: {
          probabilidad: 0,
          tiempo: 0
      },
      desviacion: 0,
      tiempoTrabajoInicialFormateo: 0,
      tiempoTrabajoFinalFormateo: 0
  },
    mode: 'onSubmit',
  });

  const [results, setResults] = useState(null);

  async function onSubmit(data) {
    const result = await simularLaboratorio(data);
    setResults(result);
  }

  let tiempoX = watch('tiempoX')
  let cantidadIteraciones = watch('cantidadIteraciones')
  let minutoDesde = watch('minutoDesde')

  let tablaCambioPlaca = watch('cambioPlaca');
  let tablaampliacionMemoria = watch('ampliacionMemoria');
  let tablaProbDanadasSeleccionada = watch('tablaProbDanadas');

  return (
    <section className={styles.menuContainer}>
      <form onSubmit={handleSubmit(onSubmit)}className={styles.inputMenu}>
        <div className={styles.inputMenu}>
            <Fieldset header='Parametros De Simulacion'>
                  <Input 
                    attributeName='tiempoX' 
                    label='Tiempo Simulacion X (minutos): ' 
                    register={register}
                    validations={{ required: "Este campo es obligatorio" }}
                    type='number'
                    error={errors.tiempoX}
                    step={0.0001}
                  />
                  <Input 
                    attributeName='cantidadIteraciones' 
                    label='Cantidad Iteraciones: ' 
                    register={register}
                    validations={{ required: "Este campo es obligatorio" }}
                    type='number'
                    error={errors.cantidadIteraciones}
                    step={0.0001}
                  />
                  <Input 
                    attributeName='minutoDesde' 
                    label='Minuto desde cual mostrar: ' 
                    register={register}
                    validations={{ required: "Este campo es obligatorio" }}
                    type='number'
                    error={errors.capacidadLaboratorio}
                    step={0.0001}
                  />
            </Fieldset>
            <Fieldset header='Configuración del Laboratorio'>
                  <Input 
                    attributeName='tiempoLlegadaMin' 
                    label='Tiempo de llegada mínimo (minutos): ' 
                    register={register}
                    validations={{ required: "Este campo es obligatorio" }}
                    type='number'
                    error={errors.tiempoLlegadaMin}
                    step={0.0001}
                  />
                  <Input 
                    attributeName='tiempoLlegadaMax' 
                    label='Tiempo de llegada máximo (minutos): ' 
                    register={register}
                    validations={{ required: "Este campo es obligatorio" }}
                    type='number'
                    error={errors.tiempoLlegadaMax}
                    step={0.0001}
                  />
                  <Input 
                    attributeName='capacidadLaboratorio' 
                    label='Capacidad del laboratorio: ' 
                    register={register}
                    validations={{ required: "Este campo es obligatorio" }}
                    type='number'
                    error={errors.capacidadLaboratorio}
                    step={0.0001}
                  />
            </Fieldset>
            <Fieldset header='Probabilidades y Tiempos'>
                  <Input 
                    attributeName='probCambioPlaca' 
                    label='Probabilidad de cambio de placa: ' 
                    register={register}
                    validations={{ required: "Este campo es obligatorio" }}
                    type='number'
                    step={0.0001}
                    error={errors.probCambioPlaca}
                  />
                  <Input 
                    attributeName='probAmpliacionMemoria' 
                    label='Probabilidad de ampliación de memoria: ' 
                    register={register}
                    validations={{ required: "Este campo es obligatorio" }}
                    type='number'
                    step={0.0001}
                    error={errors.probAmpliacionMemoria}
                    
                  />
                  <Input 
                    attributeName='probFormateoDisco' 
                    label='Probabilidad de formateo de disco: ' 
                    register={register}
                    validations={{ required: "Este campo es obligatorio" }}
                    type='number'
                    step={0.0001}
                    error={errors.probFormateoDisco}
                    
                  />
                  <Input 
                    attributeName='probAgregarCDDVD' 
                    label='Probabilidad de agregar CD/DVD: ' 
                    register={register}
                    validations={{ required: "Este campo es obligatorio" }}
                    type='number'
                    step={0.0001}
                    error={errors.probAgregarCDDVD}
                    
                  />
                  <Input 
                    attributeName='tiempoCambioPlaca' 
                    label='Tiempo para cambio de placa (minutos): ' 
                    register={register}
                    validations={{ required: "Este campo es obligatorio" }}
                    type='number'
                    error={errors.tiempoCambioPlaca}
                    step={0.1}
                  />
                  <Input 
                    attributeName='tiempoAmpliacionMemoria' 
                    label='Tiempo para ampliación de memoria (minutos): ' 
                    register={register}
                    validations={{ required: "Este campo es obligatorio" }}
                    type='number'
                    error={errors.tiempoAmpliacionMemoria}
                    step={0.1}
                  />
                  <Input 
                    attributeName='tiempoFormateoDisco' 
                    label='Tiempo para formateo de disco (minutos): ' 
                    register={register}
                    validations={{ required: "Este campo es obligatorio" }}
                    type='number'
                    error={errors.tiempoFormateoDisco}
                    step={0.1}
                  />
                  <Input 
                    attributeName='tiempoAgregarCDDVD' 
                    label='Tiempo para agregar CD/DVD (minutos): ' 
                    register={register}
                    validations={{ required: "Este campo es obligatorio" }}
                    type='number'
                    error={errors.tiempoAgregarCDDVD}
                    step={0.1}
                  />
            </Fieldset>
        </div>
        <button className={styles.submitButton} type='submit' disabled={isSubmitting}>
          Realizar Simulación
        </button>
      </form>
      {isSubmitting && (
        <div className={styles.loadingScreen}>
          <header>Generando simulación ...</header>
          <div>Por favor aguarde...</div>
          <div className={styles.loader}/>
        </div>
      )}
      {results && !isSubmitting && (
        <ResultScreen data={results} />
      )}
    </section>
  );
}
