import { useForm } from 'react-hook-form';
import styles from './Menu.module.css';
import { useState } from 'react';
import { Fieldset, Input } from '../FormComponents/FormComponents';
import { simularLaboratorio } from '../../services/laboratorioService';
import { ResultScreen } from '../ResultScreen/ResultScreen';

export function Menu() {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      x: 300,
      numeroIteraciones: 20,
      minutoDesde: 0,
      cambioPlaca: {
          probabilidad: 0.3,
          tiempo: 120
      },
      ampliacionMemoria: {
          probabilidad: 0.25,
          tiempo: 60
      },
      formateoDisco: {
          probabilidad: 0.25,
          tiempo: 180
      },
      agregarCdoDvd: {
          probabilidad: 0.2,
          tiempo: 60
      },
      desviacion: 5,
      limiteInferiorSector: 50000,
      limiteSuperiorSector: 1000000,
      constanteA: 0.9,
      coeficienteB: 0.8,
    },
    mode: 'onSubmit',
  });

  const [results, setResults] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  async function onSubmit(data) {
    try {
      const result = await simularLaboratorio(data);
      setResults(result);
      setErrorMessage(''); // Clear any previous error messages
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  let x = watch('tiempoX');
  let cantidadIteraciones = watch('cantidadIteraciones');
  let minutoDesde = watch('minutoDesde');
  let limiteInferiorSector = watch('limiteInferiorSector');

  let tablaCambioPlaca = watch('cambioPlaca');
  let tablaampliacionMemoria = watch('ampliacionMemoria');
  let tablaProbDanadasSeleccionada = watch('tablaProbDanadas');

  return (
    <section className={styles.menuContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.inputMenu}>
        <div className={styles.inputsContainer}>
          <Fieldset header='Parametros De Simulacion'>
            <Input 
              attributeName='x' 
              label='Tiempo Simulacion X (minutos): ' 
              register={register}
              validations={{ required: "Este campo es obligatorio" }}
              type='number'
              error={errors.x}
              step={0.1}
            />
            <Input 
              attributeName='numeroIteraciones' 
              label='Cantidad Iteraciones: ' 
              register={register}
              validations={{
                required: {value: true, message: "Se deben ingresar la cantidad de simulaciones a realizar"}, 
                min: {value: 1, message: "Se debe realziar al menos una simulacion"},
                max: {value: 100000, message: "No se pueden generar mas de 100000 simulaciones"}
              }}
              type='number'
              error={errors.numeroIteraciones}
              step={1}
            />
            <Input 
              attributeName='minutoDesde' 
              label='Minuto desde cual mostrar: ' 
              register={register}
              validations={{
                required: {value: true, message: "Se deben ingresar la primera simulacion a visualizar"}, 
                min: {value: 0, message: "Se debe visualizar al menos una simulacion"},
                max: {value: x, message: `No puede mostrar mas de ${x} minutos`}
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
            <Fieldset header='Configuración de Runge Kutta'>
              <Input 
                attributeName='limiteInferiorSector' 
                label='Limite Inferior del Sector: ' 
                register={register}
                validations={{
                  required: "Este campo es obligatorio",
                  min: {value: 0, message: "Debe ser como minimo 0"},
                }}
                type='number'
                error={errors.limiteInferiorSector}
                step={0.00001}
              />
              <Input 
                attributeName='limiteSuperiorSector' 
                label='Limite Superior del Sector: ' 
                register={register}
                validations={{
                  required: "Este campo es obligatorio",
                  min: {value: limiteInferiorSector + 0.0000001, message: "Este valor debe ser mayor que el limite inferior"},
                }}
                type='number'
                error={errors.limiteSuperiorSector}
                step={0.00001}
              />
              <Input 
                attributeName='constanteA' 
                label='Constante A: ' 
                register={register}
                validations={{ required: "Este campo es obligatorio" }}
                type='number'
                error={errors.constanteA}
                step={0.01}
              />
              <Input 
                attributeName='coeficienteB' 
                label='Coeficiente B: ' 
                register={register}
                validations={{ required: "Este campo es obligatorio" }}
                type='number'
                error={errors.coeficienteB}
                step={0.01}
              />
            </Fieldset>
          </Fieldset>
          <div className={styles.row}>
            <div className={styles.column}>
              <Fieldset header='Cambio de Placa'>
                <Input 
                  attributeName='cambioPlaca.probabilidad' 
                  label='Probabilidad: ' 
                  register={register}
                  validations={{
                    required: "Este campo es obligatorio",
                    max: {value: 1, message: "La probabilidad no puede ser mayor que 1"},
                    min: {value: 0, message: "La probabilidad no puede ser menor que 0"}
                  }}
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
                  validations={{
                    required: "Este campo es obligatorio",
                    max: {value: 1, message: "La probabilidad no puede ser mayor que 1"},
                    min: {value: 0, message: "La probabilidad no puede ser menor que 0"}
                  }}
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
                  validations={{
                    required: "Este campo es obligatorio",
                    max: {value: 1, message: "La probabilidad no puede ser mayor que 1"},
                    min: {value: 0, message: "La probabilidad no puede ser menor que 0"}
                  }}
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
                  validations={{
                    required: "Este campo es obligatorio",
                    max: {value: 1, message: "La probabilidad no puede ser mayor que 1"},
                    min: {value: 0, message: "La probabilidad no puede ser menor que 0"}
                  }}
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
      {errorMessage && (
        <div className={styles.errorMessage}>
          {errorMessage}
        </div>
      )}
      {results && !isSubmitting && !errorMessage && (
        <ResultScreen data={results} />
      )}
    </section>
  );
}
