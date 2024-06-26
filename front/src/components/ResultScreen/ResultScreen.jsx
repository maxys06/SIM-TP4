import styles from './ResultScreen.module.css';
import Tabla from './Tabla/Tabla.jsx';
import { obtenerxlsx } from '../../services/laboratorioService.js';

export function ResultScreen({ data }) {
  const handleButtonClick = async () => {
    try {
      const blob = await obtenerxlsx();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'tabla_runge_kutta.xlsx'; // Nombre del archivo de descarga
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error al obtener el archivo Excel:', error);
    }
  };

  return (
    <section className={styles.resultScreen}>
      
      <header className={styles.resultHeader}>Resultados de la Simulación</header>
        
      <Tabla datos={data.ultimaFilaVecEstado} sticky={false} />
      <button className={styles.Button} onClick={handleButtonClick}>Obtener Tabla Rugen Kutta</button>


      <Tabla datos={data.vectorEstadoVisible} />
    </section>
  );
}
