import styles from './msg.module.css'

const Menssagem= ({type, text})=>{
    return(
        <>
        <div className={styles[type]}>
            <p>{text}</p>
        </div>
        </>
    )
}