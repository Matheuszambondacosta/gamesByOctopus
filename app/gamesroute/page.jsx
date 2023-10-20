"use client";
import styles from './page.module.css';

const gameDescription = () => {
    return (
        <div className={styles.container}>
            <h1>Nome do Jogo</h1>
            <p>Imagem do jogo</p>
            {/* <img src={} alt={}></img>  */}
            <p>Plataformas, plataformas, plataformas</p>
            <p>Descrição do jogo</p>
            <p>avaliação do jogo</p>
            <p>genero do jogo</p>
            <p>data de lançamento</p>
        </div>
    );
};

export default gameDescription;