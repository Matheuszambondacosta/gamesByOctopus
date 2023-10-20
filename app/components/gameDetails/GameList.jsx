"use client";
import GameCard from './GameCard'; 
import styles from './GameList.module.css';

const GameList = ({ filterGames }) => {
  return (
    <div className={styles.GameContainer}>
      {filterGames.length > 0 ? (
        filterGames.map((game) => <GameCard key={game.id} game={game} />)
      ) : (
        <div className={styles.loading}>
          <p>Não foi possível encontar um jogo</p>
        </div>
      )}
    </div>
  );
};

export default GameList;
