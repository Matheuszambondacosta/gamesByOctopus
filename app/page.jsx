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
  const [flag, setFlag] = useState(0);
  const [editbtn, setEditbtn] = useState(false);
  const [divGames, setDivGames] = useState(true);
  const [divInput, setDivInput] = useState(false);
  const [newGameList, setNewGameList] = useState(gamelist.getGames());
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedRating, setSelectedRating] = useState('all');
  const [name, setname] = useState('');
  const [platform, setPlatform] = useState('');
  const [genre, setGenre] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const lowerSearch = search.toLowerCase();
  const [allGames, setAllGames] = useState(null);
  const [HolyGames, setHolyGames] = useState([]);

  const submitGame = () => {
    const newGame = new NewGame(name, platform, genre, date, image, description);
    let indica = false;
    if (!newGameList.some((game) => game.name === newGame.name)) {
      const updatedGame = [...newGameList, newGame];
      setNewGameList(updatedGame);
      indica = true;
    }
    gamelist.addNewGame(newGame);
    setNewGameList(gamelist.getGames());
  
    setname('');
    setPlatform('');
    setGenre('');
    setDate('');
    setImage('');
    setDescription('');
    return indica;
  }
  

  const removeGames = (id) => {
    console.log(id);
    gamelist.removeGame(id);
    setNewGameList(gamelist.getGames());
    setHolyGames(gamelist.getGames());
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
        const visibleGames = allGameData.slice(0, itemsPerPage);
        setAllGames(visibleGames);
        gamelist.demonMethod(allGameData);
        setHolyGames(gamelist.getGames())
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllGames();
  }, []);

  useEffect(() => {
    if(allGames && allGames.data){
      allGames.data.map((game) => {
        const newGame = new NewGame(game.name, game.platforms, game.genres, game.released, game.image, game.description);
        gamelist.addNewGame(newGame);
      });
      const newGamesUpdated = [...newGameList, ...gamelist.getGames()];
      setNewGameList(newGamesUpdated);
      setHolyGames(gamelist.getGames());
    }
  }, [allGames]);



  // const filteredGames = () => {
  //   const filters = games.filter((game) => {
  //     const platformName = game.platforms.map((platform) => platform.platform.name);
  //     const gameGenres = game.genres.map((genre) => genre.name);
  //     const platformFilter = selectedPlatform === 'all' || platformName.includes(selectedPlatform);
  //     const genreFilter = selectedGenre === 'all' || gameGenres.includes(selectedGenre);
  //     const ratingFilter = selectedRating === 'all' || game.rating === selectedRating;
  //     return platformFilter && genreFilter && ratingFilter;
  //   });
  //   setGames(filters);
  // };
  const getPlatforms = (platforms) => {
    const platformsStr = platforms
      .map((platform) => platform.platform.name)
      .join(", ");
    if (platformsStr.length > 50) {
      return platformsStr.substring(0, 50) + "...";
    }
    return platformsStr;
  };

  const nextPage = () => {
    const newPage = page + 1;
    setPage(newPage);
    const startIndex = (newPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleGames = allGames.slice(startIndex, endIndex);
    setAllGames(visibleGames);
  };


  const previousPage = () => {
    if (page > 1) {
      const newPage = page - 1;
      setPage(newPage);
      const startIndex = (newPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const visibleGames = allGames.slice(startIndex, endIndex);
      setAllGames(visibleGames);
    }
  };
  const changeDisplay = () => {
    setDivGames(!divGames);
    setDivInput(!divInput);
  }
    


  const clearFilters = () => {
    setSelectedPlatform('all');
    setSelectedGenre('all');
    setSelectedRating('all');
  };
  const clearInfos = () => {
    setname('');
    setPlatform('');
    setGenre('');
    setDate('');
    setImage('');
    setDescription('');
  }

  const handleSearch = () => {
    const filteredGames = gamelist.getGames().filter((game) => {
      return game.name.toLowerCase().includes(lowerSearch);
    });
    setHolyGames(filteredGames);
  }

  const updateGame = () => {
    gamelist.updateGame(flag, name, platform, genre, date, image, description);
    setNewGameList(gamelist.getGames());
    setHolyGames(gamelist.getGames());
    setEditbtn(false);
    clearInfos();
    changeDisplay();
  }


  const editGame = (id) => {
    const game = gamelist.getNewGamePorId(id);
    setname(game.nome);
    setPlatform(game.plataforma);
    setGenre(game.generos);
    setDate(game.dataLancamento);
    setImage(game.imagem);
    setDescription(game.descricao);
    setEditbtn(true);
    setFlag(id);
  }


  return (
    <main className={styles.main}>
      <Header Prince={changeDisplay}/>
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
        <div className={styles.containerGames} style={{display : divGames ? 'block' : 'none'}} value={divGames}>
          {
            HolyGames ? (
              HolyGames.map((game) =>
              <div key={game.id} className={styles2.card}>
                <div className={styles2.imgcards}>
                <img className={styles2.gameThumb} src={game.background_image} alt={game.name} />
                <Link className={styles2.seeMore} href={`../../games/${game.id}`}>Veja Mais</Link>
                </div>
                <div className={styles2.cardInfo}>
                  <h2 className={styles2.title}>{game.name}</h2>
                  <p className={styles2.rating}>{game.rating}</p>
                  <p className={styles2.released}>{game.released}</p>
                  <p className={styles2.genres}>{game.genres.map((genre) => genre.name).join(", ")}</p>
                  <p className={styles2.platforms}>{getPlatforms(game.parent_platforms)}</p>
                </div>
                <div className={styles2.contaierbuttons}>
                  <button className={styles2.button} value={game.name}>
                    <BsTrashFill onClick={() => removeGames(game.id)} />
                  </button>
                  <button className={styles2.button}>
                    <BiSolidEditAlt />
                  </button>
                </div>
              </div>
          
          )) : (
            <div className={styles.loading}>
              <p>Não foi possível encontar um jogo</p>
            </div>
          )
        }
        
        </div>
      </div>
      <div className={styles.pagesbuttons}>
        <button className={styles.button} onClick={previousPage}>
          Página anterior
        </button>
        <button className={styles.button} onClick={nextPage}>
          Próxima página
        </button>
      </div>

      <div className={styles.containerInputs} style={{display : divInput ? 'block' : 'none' }} value={divInput}>
        <h1>Nome do Jogo</h1>
        <input className={styles.nameinput} type="text"
          value={name}
          onChange={(ev) => setname(ev.target.value)}
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
