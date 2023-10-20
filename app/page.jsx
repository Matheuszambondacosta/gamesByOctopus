"use client";
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import { fetchApi } from '@/data/apiconsumer';
import GameList from './components/gameDetails/GameList';
import { FiSearch } from 'react-icons/fi';
import Comentario from '@/models/Jogo';
import ListaJogo from '@/models/JogoLista';
import Header from './components/header/header';
function Home() {
  const [games, setGames] = useState([]);
  const [search, setsearch] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("all");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [genre, setGenre] = useState("");
  const [comentarios, setComentarios] = useState([]);
  const [listaJogo, setListaJogo] = useState([]);
  const [listaComentarios, setListaComentarios] = useState([]);
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
    const platformFilter = selectedPlatform == "all" || platformName.includes(selectedPlatform);
    const genreFilter = selectedGenre == "all" || gameGenres.includes(selectedGenre);
    const ratingFilter = selectedRating == "all" || game.rating == selectedRating;
    const gameName = game.name.toLowerCase();

    return platformFilter && genreFilter && ratingFilter && gameName.includes(lowerSearch);
  });

  const uniquePlatforms = games
  .flatMap((game) => game.platforms)
  .map((platform) => platform.platform.name)
  .filter((name, index, array) => array.indexOf(name) === index)
  .sort();

  const uniqueGenres = games
    .flatMap((game) => game.genres)
    .map((genre) => genre.name)
    .filter((name, index, array) => array.indexOf(name) == index)
    .sort();

  const uniqueRatings = games
    .map((game) => game.rating)
    .filter((name, index, array) => array.indexOf(name) == index)
    .sort();

  const clearFilters = () => {
    setSelectedPlatform("all");
    setSelectedGenre("all");
    setSelectedRating("all");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const novoJogo = new Comentario(title, platform, genre);
    const novaLista = new ListaJogo();
    novaLista.adicionarJogo(novoJogo);
    setListaJogo(novaLista);
    const novoComentario = new Comentario(title, platform, genre);
    const novaListaComentarios = new ListaJogo();
    novaListaComentarios.adicionarJogo(novoComentario);
    setListaComentarios(novaListaComentarios);
    const dados = await fetchApi();
    setGames(dados);
    setTitle("");
    setPlatform("");
    setGenre("");
  }

  return (
    <main className={styles.main}>
      <Header />
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
          {uniquePlatforms.map((name) => (
            <option value={name}>{name}</option>
          ))}
        </select>

        <h2>Ordenar por gênero:</h2>
        <select
          className={styles.select}
          value={selectedGenre}
          onChange={(ev) => setSelectedGenre(ev.target.value)}
        >
          <option value="all">Todas</option>
          {uniqueGenres.map((name) => (
            <option value={name}>{name}</option>
          ))}
        </select>

        <h2>Ordenar por classificação:</h2>
        <select
          className={styles.select}
          value={selectedRating}
          onChange={(ev) => setSelectedRating(ev.target.value)}
        >
          <option value="all">Todas</option>
          {uniqueRatings.map((name) => (
            <option value={name}>{name}</option>
          ))}
        </select>

        <button className={styles.button} onClick={clearFilters}>
          Redefinir Filtros
        </button>
        <div className={styles.containerGames}>
          <GameList filterGames={filterGames} />
        </div>
      </div>
      <div className={styles.containerInputs}>
      <form onSubmit={handleSubmit}>
      <div className={styles.containerInputs}>
        <h1>Adicione seu Jogo</h1>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="platform">Plataforma:</label>
        <input
          type="text"
          id="platform"
          value={platform}
          onChange={(event) => setPlatform(event.target.value)}
        />
        <label htmlFor="genre">Gênero:</label>
        <input
          type="text"
          id="genre"
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
        />
        <button type="submit">Adicionar Jogo</button>
      </div>
    </form>
      </div>
    </main>
  );
}

export default Home;