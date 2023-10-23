"use client";
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import styles2 from './components/gameDetails/GameCard.module.css';
import { fetchAsyncGames } from '@/data/gamedata';
import GameList from './components/gameDetails/GameList';
import { FiSearch } from 'react-icons/fi';
import Header from '@/app/components/header/header';
import NewGame from '@/models/Jogo';
import NewGameList from '@/models/JogoLista';
import { BsTrashFill } from 'react-icons/bs';
import { BiSolidEditAlt } from 'react-icons/bi';
import Link from 'next/link';

const itemsPerPage = 10;
const gamelist = new NewGameList();
function Home() {
  const [newGameList, setNewGameList] = useState(gamelist.getGames());
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedRating, setSelectedRating] = useState('all');
  const [title, setTitle] = useState('');
  const [platform, setPlatform] = useState('');
  const [genre, setGenre] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const lowerSearch = search.toLowerCase();
  const [allGames, setAllGames] = useState([]);


  const handleSearch = () => {
    const filteredGames = allGames.filter((game) => {
      const gameName = game.name.toLowerCase();
      return gameName.includes(lowerSearch);
    });
    setGames(filteredGames);
  };

  const submitGame = () => {
    const newGame = new NewGame(title, platform, genre, date, image, description);
    if (!newGameList.some((game) => game.title === newGame.title)) {
      const updatedGame = [...newGameList, newGame];
      setNewGameList(updatedGame);
    }
    gamelist.addNewGame(newGame);
    setNewGameList(gamelist.getGames());

    setTitle('');
    setPlatform('');
    setGenre('');
    setDate('');
    setImage('');
    setDescription('');
  }

  

  const removeGames = (game) => {
    gamelist.removeGame(game);
    setNewGameList(gamelist.getGames());
  }
  useEffect(() => {
    const fetchAllGames = async () => {
      try {
        let allGameData = [];
        let currentPage = 1;
        while (allGameData.length < 100) {
          const response = await fetchAsyncGames(currentPage);
          allGameData = [...allGameData, ...response.results];
          currentPage++;
        }
        setAllGames(allGameData);
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const visibleGames = allGameData.slice(startIndex, endIndex);
        setGames(visibleGames);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllGames();
  }, []);

  useEffect(() => {
    if (games && games.data) {
      games.data.forEach((gamedata) => {
        const newGames = newGames(
          gamedata.name,
          gamedata.platform,
          gamedata.genre,
          gamedata.date,
          gamedata.image,
          gamedata.description
        );
        gamelist.addGame(newGames);
      });
      const updatedNewGames = [...newGameList, gamelist.getGames()];
      setNewGameList(updatedNewGames);

    }
  }, [games]);


  const filteredGames = () => {
    const filters = games.filter((game) => {
      const platformName = game.platforms.map((platform) => platform.platform.name);
      const gameGenres = game.genres.map((genre) => genre.name);
      const platformFilter = selectedPlatform === 'all' || platformName.includes(selectedPlatform);
      const genreFilter = selectedGenre === 'all' || gameGenres.includes(selectedGenre);
      const ratingFilter = selectedRating === 'all' || game.rating === selectedRating;
      return platformFilter && genreFilter && ratingFilter;
    });
    setGames(filters);
  };

  const nextPage = () => {
    const newPage = page + 1;
    setPage(newPage);
    const startIndex = (newPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleGames = allGames.slice(startIndex, endIndex);
    setGames(visibleGames);
  };


  const previousPage = () => {
    if (page > 1) {
      const newPage = page - 1;
      setPage(newPage);
      const startIndex = (newPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const visibleGames = allGames.slice(startIndex, endIndex);
      setGames(visibleGames);
    }
  };


  const clearFilters = () => {
    setSelectedPlatform('all');
    setSelectedGenre('all');
    setSelectedRating('all');
    setGames(allGames);
  };

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <h1>Games</h1>
        <div className={styles.divinput}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Pesquise um jogo"
            value={search}
            onChange={(ev) => setSearch(ev.target.value)}
          />
          <FiSearch onClick={handleSearch} />
        </div>
        <select
          className={styles.select}
          value={selectedPlatform}
          onChange={(ev) => setSelectedPlatform(ev.target.value)}
        >
          <option value="all">Filtre pela plataforma:</option>
          {/* {uniquePlatforms.map((name) => (
            <option value={name}>{name}</option>
          ))} */}
        </select>
        <select
          className={styles.select}
          value={selectedGenre}
          onChange={(ev) => setSelectedGenre(ev.target.value)}
        >
          <option value="all">Ordenar por gênero:</option>
          {
            // Opções de gênero

          }
        </select>
        <select
          className={styles.select}
          value={selectedRating}
          onChange={(ev) => setSelectedRating(ev.target.value)}
        >
          <option value="all">Ordenar por classificação:</option>
          {/* Opções de classificação */}
        </select>
        <button className={styles.button} onClick={clearFilters}>
          Redefinir Filtros
        </button>
        <div className={styles.containerGames}>
          <GameList filterGames={games} />
        </div>
      </div>
      <div>
        {
          newGameList && newGameList.length > 0 ? (
            newGameList.map((game) => (
              <div className={styles2.card} key={game.id}>
                <div className={styles2.imgcards}>
                  <img className={styles2.gameThumb} src={game.imagem} alt={game.nome} />
                  <Link className={styles2.seeMore} href={`../../games/${game.id}`}>Veja Mais</Link>
                </div>
                <div className={styles2.cardInfo}>
                  <h2 className={styles2.title}>{game.nome}</h2>
                  <p className={styles2.released}>{game.dataLancamento}</p>
                  <p className={styles2.genres}>{game.generos}</p>
                  <p className={styles2.platforms}>{game.plataforma}</p>
                </div>
                <div className={styles2.contaierbuttons}>
                  <button className={styles2.button}>
                    <BsTrashFill onClick={() => removeGames(game.id)}/>
                  </button>
                  <button className={styles2.button}>
                    <BiSolidEditAlt />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div>
              <p>Não há jogos adicionados</p>
            </div>
          )
        }
      </div>
      <div className={styles.pagesbuttons}>
        <button className={styles.button} onClick={previousPage}>
          Página anterior
        </button>
        <button className={styles.button} onClick={nextPage}>
          Próxima página
        </button>
      </div>

      <div className={styles.containerInputs}>
        <h1>Nome do Jogo</h1>
        <input className={styles.nameinput} type="text"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <h1>Plataforma</h1>
        <input className={styles.platforminput} type="text"
          value={platform}
          onChange={(ev) => setPlatform(ev.target.value)}
        />
        <h1>Gênero</h1>
        <input className={styles.genreinput} type="text"
          value={genre}
          onChange={(ev) => setGenre(ev.target.value)}
        />
        <h1>Data de lançamento</h1>
        <input className={styles.dateinput} type="date"
          value={date}
          onChange={(ev) => setDate(ev.target.value)}

        />
        <h1>Imagem do jogo</h1>
        <input className={styles.imageinput} type="text"
          value={image}
          onChange={(ev) => setImage(ev.target.value)}

        />
        <h1>Descrição</h1>
        <input className={styles.descriptioninput} type="text" />
        <button className={styles.button} onClick={submitGame}>Adicionar Jogo</button>
      </div>
    </main >
  );
}

export default Home;
