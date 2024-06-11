import styles from './ResultScreen.module.css';

export function ResultScreen({ data }) {
  return (
    <section className={styles.resultScreen}>
      <header>Resultados de la Simulación</header>
      <table className={styles.resultTable}>
        <thead>
          <tr>
            {Object.keys(data[0]).map(key => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, idx) => (
                <td key={idx}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
