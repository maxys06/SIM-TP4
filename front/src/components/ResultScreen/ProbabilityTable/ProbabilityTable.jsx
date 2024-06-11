import styles from './ProbabilityTable.module.css'

export function ProbabilityTable({header, intervals, label}) {

    return (
        <table className={styles.table}>
            <caption>{header}</caption>
            <thead>
                <tr>
                    <th>{label}</th>
                    <th>P</th>
                    <th>LINF</th>
                    <th>LSUP</th>
                </tr>
            </thead>
            <tbody>
                {intervals.map((i, idx) => (
                    <tr key={idx}>
                        <td>{i.valor}</td>
                        <td>{i.probabilidad}</td>
                        <td>{i.lInf}</td>
                        <td>{i.lSup}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )

}
