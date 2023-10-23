"use client";
import styles from './GameCard.module.css';
import { BsTrashFill } from 'react-icons/bs';
import { BiSolidEditAlt } from 'react-icons/bi';
import Link from 'next/link';

const GameCard = ({ game, gamelist }) => {
  const removeGames = (id) => {
    gamelist.removeGame(id);
  }

  const getPlatforms = (platforms) => {
    const platformsStr = platforms
      .map((platform) => platform.platform.name)
      .join(", ");
    if (platformsStr.length > 50) {
      return platformsStr.substring(0, 50) + "...";
    }
    return platformsStr;
  };

  return (
    <div className={styles.card}>
      <div className={styles.imgcards}>
      <img className={styles.gameThumb} src={game.background_image} alt={game.name} />
      <Link className={styles.seeMore} href={`../../games/${game.id}`}>Veja Mais</Link>
      </div>
      <div className={styles.cardInfo}>
        <h2 className={styles.title}>{game.name}</h2>
        <p className={styles.rating}>{game.rating}</p>
        <p className={styles.released}>{game.released}</p>
        <p className={styles.genres}>{game.genres.map((genre) => genre.name).join(", ")}</p>
        <p className={styles.platforms}>{getPlatforms(game.parent_platforms)}</p>
      </div>
      <div className={styles.contaierbuttons}>
        <button className={styles.button} value={game.name}>
          <BsTrashFill onClick={() => removeGames(game.id)} />
        </button>
        <button className={styles.button}>
          <BiSolidEditAlt />
        </button>
      </div>
    </div>
  );
}

export default GameCard;