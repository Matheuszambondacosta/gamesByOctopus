"use client";
import GameCard from './GameCard'; 

function GameList({ games, removeGame, editGame }) {
  return (
    <div>
      {games.map((game) => (
        <GameCard key={game.id} game={game} removeGame={removeGame} editGame={editGame} />
      ))}
    </div>
  );
}

export default GameList;
