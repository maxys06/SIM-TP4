import { useForm } from 'react-hook-form';
import styles from './Menu.module.css';
import { useState } from 'react';
import { Fieldset, Input } from '../FormComponents/FormComponents';
import { simularLaboratorio } from '../../services/laboratorioService';
import { ResultScreen } from '../ResultScreen/ResultScreen';

export function Menu() {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      tiempoX: 1,
      cantidadIteraciones: 5,
      minutoDesde: 5,
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

  let tiempoX = watch('tiempoX');
  let cantidadIteraciones = watch('cantidadIteraciones');
  let minutoDesde = watch('minutoDesde');

  let tablaCambioPlaca = watch('cambioPlaca');
  let tablaampliacionMemoria = watch('ampliacionMemoria');
  let tablaProbDanadasSeleccionada = watch('tablaProbDanadas');

  return (
    <section className={styles.menuContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.inputMenu}>
        <div className={styles.inputsContainer}>
            <Fieldset header='Parametros De Simulacion'>
                  <Input 
                    attributeName='tiempoX' 
                    label='Tiempo Simulacion X (minutos): ' 
                    register={register}
                    validations={{ required: "Este campo es obligatorio" }}
                    type='number'
                    error={errors.tiempoX}
                    step={0.1}
                  />
                  <Input 
                    attributeName='cantidadIteraciones' 
                    label='Cantidad Iteraciones: ' 
                    register={register}
                    validations={{required: {value: true, message: "Se deben ingresar la cantidad de simulaciones a realizar"}, 
                    min: {value: 1, message: "Se debe realziar al menos una simulacion"},
                    max: {value: 100000, message: "No se pueden generar mas de 100000 simulaciones"}
                    }}
                    type='number'
                    error={errors.cantidadIteraciones}
                    step={0.1}
                  />
                  <Input 
                    attributeName='minutoDesde' 
                    label='Minuto desde cual mostrar: ' 
                    register={register}
                    validations={{required: {value: true, message: "Se deben ingresar la primera simulacion a visualizar"}, 
                                min: {value: 1, message: "Se debe visualizar al menos una simulacion"},
                                max: {value: Number(minutoDesde), message: `No debe se puede visualizar mas de ${Number(minutoDesde)} simulaciones`}
                                }}
                    type='number'
                    error={errors.minutoDesde}
                    step={0.1}
                  />
            </Fieldset>
            <Fieldset header='Configuración de la Simulacion'>
                  <Input 
                    attributeName='desviacion' 
                    label='Desviacion (minutos): ' 
                    register={register}
                    validations={{ required: "Este campo es obligatorio" }}
                    type='number'
                    error={errors.desviacion}
                    step={0.1}
                  />
                  <Input 
                    attributeName='tiempoTrabajoInicialFormateo' 
                    label='Tiempo de Trabajo inicial de Formateo (minutos): ' 
                    register={register}
                    validations={{ required: "Este campo es obligatorio" }}
                    type='number'
                    error={errors.tiempoTrabajoInicialFormateo}
                    step={0.1}
                  />
                  <Input 
                    attributeName='tiempoTrabajoFinalFormateo' 
                    label='Tiempo De trabajo Final de Formateo: ' 
                    register={register}
                    validations={{ required: "Este campo es obligatorio" }}
                    type='number'
                    error={errors.tiempoTrabajoFinalFormateo}
                    step={1}
                  />
            </Fieldset>
            
              <div className={styles.row}>
                <div className={styles.column}>
                  <Fieldset header='Cambio de Placa'>
                    <Input 
                      attributeName='cambioPlaca.probabilidad' 
                      label='Probabilidad: ' 
                      register={register}
                      validations={{ required: "Este campo es obligatorio" }}
                      type='number'
                      step={0.01}
                      error={errors.cambioPlaca?.probabilidad}
                    />
                    <Input 
                      attributeName='cambioPlaca.tiempo' 
                      label='Tiempo (minutos): ' 
                      register={register}
                      validations={{ required: "Este campo es obligatorio" }}
                      type='number'
                      step={0.1}
                      error={errors.cambioPlaca?.tiempo}
                    />
                  </Fieldset>
                </div>
                <div className={styles.column}>
                  <Fieldset header='Ampliación de Memoria'>
                    <Input 
                      attributeName='ampliacionMemoria.probabilidad' 
                      label='Probabilidad: ' 
                      register={register}
                      validations={{ required: "Este campo es obligatorio" }}
                      type='number'
                      step={0.01}
                      error={errors.ampliacionMemoria?.probabilidad}
                    />
                    <Input 
                      attributeName='ampliacionMemoria.tiempo' 
                      label='Tiempo (minutos): ' 
                      register={register}
                      validations={{ required: "Este campo es obligatorio" }}
                      type='number'
                      step={0.1}
                      error={errors.ampliacionMemoria?.tiempo}
                    />
                  </Fieldset>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.column}>
                  <Fieldset header='Formateo de Disco'>
                    <Input 
                      attributeName='formateoDisco.probabilidad' 
                      label='Probabilidad: ' 
                      register={register}
                      validations={{ required: "Este campo es obligatorio" }}
                      type='number'
                      step={0.01}
                      error={errors.formateoDisco?.probabilidad}
                    />
                    <Input 
                      attributeName='formateoDisco.tiempo' 
                      label='Tiempo (minutos): ' 
                      register={register}
                      validations={{ required: "Este campo es obligatorio" }}
                      type='number'
                      step={0.1}
                      error={errors.formateoDisco?.tiempo}
                    />
                  </Fieldset>
                </div>
                <div className={styles.column}>
                  <Fieldset header='Agregar CD/DVD'>
                    <Input 
                      attributeName='agregarCdoDvd.probabilidad' 
                      label='Probabilidad: ' 
                      register={register}
                      validations={{ required: "Este campo es obligatorio" }}
                      type='number'
                      step={0.01}
                      error={errors.agregarCdoDvd?.probabilidad}
                    />
                    <Input 
                      attributeName='agregarCdoDvd.tiempo' 
                      label='Tiempo (minutos): ' 
                      register={register}
                      validations={{ required: "Este campo es obligatorio" }}
                      type='number'
                      step={0.1}
                      error={errors.agregarCdoDvd?.tiempo}
                    />
                  </Fieldset>
                </div>
              </div>
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
