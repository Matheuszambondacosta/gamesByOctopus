"use client";
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import fetchApi from '@/data/apiconsumer';
import GameList from './components/gameDetails/GameList';
import { FiSearch } from 'react-icons/fi';
import SobreNos from './sobrenos/page';

function Home() {
    const [games, setGames] = useState([]);
    const [search, setsearch] = useState("");
    const [selectedPlatform, setSelectedPlatform] = useState("all");
    const [selectedGenre, setSelectedGenre] = useState("all");
    const [selectedRating, setSelectedRating] = useState("all");
    const lowerSearch = search.toLowerCase();
    useEffect(() => {
        const gamesFetch = async () => {
            try {
                const dados = await fetchApi();
                setGames(dados);
            } catch (error) {
                throw error;
            }
        };

        gamesFetch();
    }, []);

        const filterGames = games.filter((game) => {
        const platformName = game.platforms.map((platform) => platform.platform.name);
        const gameGenres = game.genres.map((genre) => genre.name);
        const platformFilter = selectedPlatform === "all" || platformName.includes(selectedPlatform);
        const genreFilter = selectedGenre === "all" || gameGenres.includes(selectedGenre);
        const ratingFilter = selectedRating === "all" || game.rating === selectedRating;
        const gameName = game.name.toLowerCase();

      return platformFilter && genreFilter && ratingFilter && gameName.includes(lowerSearch);
  });

    const clearFilters = () => {
        setSelectedPlatform("all");
        setSelectedGenre("all");
        setSelectedRating("all");
    }

    return (
      <main className={styles.main}>
        <div className={styles.container}>
      <h1>Games</h1>
      <div className={styles.divinput}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Pesquisar" 
        value={search}
        onChange={(ev) => setsearch(ev.target.value)}
      />
        <FiSearch />
      </div>
      <h2>Filtre pela plataforma:</h2>
      <select
        className={styles.select}
        value={selectedPlatform}
        onChange={(ev) => setSelectedPlatform(ev.target.value)}
      >
        <option value="all">Todas</option>
        {games.map((game) =>
          game.platforms.map((platform) => (
            <option value={platform.platform.name}>{platform.platform.name}</option>
          ))
        )}
      </select>

      <h2>Ordenar por gênero:</h2>
      <select
        className={styles.select}
        value={selectedGenre}
        onChange={(ev) => setSelectedGenre(ev.target.value)}
      >
        <option value="all">Todas</option>
        {games.map((game) =>
          game.genres.map((genre) => (
            <option value={genre.name}>{genre.name}</option>
          ))
        )}
      </select>

      <h2>Ordenar por classificação:</h2>
      <select
        className={styles.select}
        value={selectedRating}
        onChange={(ev) => setSelectedRating(ev.target.value)}
      >
        <option value="all">Todas</option>
        {games.map((game) => (
          <option value={game.rating}>{game.rating}</option>
        ))}
      </select>

      <button className={styles.button} onClick={clearFilters}>
        Redefinir Filtros
      </button>
      <div className={styles.containerGames}>
        <GameList filterGames={filterGames} />
      </div>
    </div>
    </main>
  );
}

export default Home;