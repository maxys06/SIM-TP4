import styles from './ResultScreen.module.css';
import Tabla from './Tabla/Tabla.jsx'

export function ResultScreen({ data }) {
  return (
    <section className={styles.resultScreen}>
      <header>Resultados de la Simulación</header>
        <Tabla datos={data.ultimaFilaVecEstado} sticky = {false}/>
       <Tabla datos={data.vectorEstadoVisible}/>
    </section>
  );
}
