"use client";
import GameCard from './GameCard'; 
import styles from './GameList.module.css';

function GameList({ games, removeGame, editGame }) {
  return (
    <div className={styles.cardWrap}>
      {games.map((game) => (
        <GameCard key={game.id} game={game} removeGame={removeGame} editGame={editGame} />
      ))}
    </div>
  );
}

export default GameList;
