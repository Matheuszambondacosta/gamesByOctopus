import styles from './sobrenos.module.css';
const Lista = ({titulo, cor, children}) => {
    return(
        titulo == 'Despesas Registradas' ? (
            <div className={styles.registrosdespesas} style={{backgroundColor: cor}}>
                <p className={styles.registrosdespesastitle}>{titulo}</p>
                <div className={styles.registrosdespesaslist}>
                    {children}
                </div>
            </div>
         ) : (
            <div className={styles.registrosreceitas} style={{backgroundColor: cor}}>
                <p className={styles.registrosreceitastitle}>{titulo}</p>
                <div className={styles.registrosreceitaslist}>
                    {children}
                </div>
            </div>
         )
        
        )
}

export default Lista;