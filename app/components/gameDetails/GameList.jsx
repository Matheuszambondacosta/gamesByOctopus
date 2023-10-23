"use client";
import GameCard from './GameCard'; 
import styles from './GameList.module.css';

const GameList = ({ filterGames, gamelist }) => {
  return (
    <div className={styles.GameContainer}>
      {filterGames.length > 0 ? (
        filterGames.map((game) => <GameCard key={game.id} game={game} gamelist={gamelist} />)
      ) : (
        <div className={styles.loading}>
          <p>Não foi possível encontar um jogo</p>
        </div>
      )}
    </div>
  );
};

export default GameList;
