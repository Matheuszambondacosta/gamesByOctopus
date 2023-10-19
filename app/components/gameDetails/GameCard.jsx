"use client";
import styles from './GameCard.module.css';
import Link from 'next/link';

const GameCard = ({ game }) => {
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
      <img className={styles.gameThumb} src={game.background_image} alt={game.name} />
      <div className={styles.cardInfo}>
        <h2 className={styles.title}>{game.name}</h2>
        <p className={styles.rating}>{game.rating}</p>
        <p className={styles.released}>{game.released}</p>
        <p className={styles.genres}>{game.genres.map((genre) => genre.name).join(", ")}</p>
        <p className={styles.platforms}>{getPlatforms(game.parent_platforms)}</p>
        <Link className={styles.seeMore} href={`/game/${game.id}`}>Veja Mais</Link>
      </div>
    </div>
    );
    }

export default GameCard;