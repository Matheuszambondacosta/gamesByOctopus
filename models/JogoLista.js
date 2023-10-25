import NewGame from "./Jogo";
import { fetchAsyncGames } from "@/data/gamedata";

export default class NewGameList {
  constructor() {
    this.games = [];
  }

  demonMethod(lista) {
    
    this.games = this.games.concat(lista);
    console.log("Ele está observando");
    console.log(this.games);
    this.angelMethod();
    console.log("Ele ainda está observando");
    console.log(this.games);

  }

  // exclude duplicate games
  angelMethod() {
    this.games = this.games.filter((game, index, self) =>
      index === self.findIndex((t) => (
        t.id === game.id
      ))
    )
  }

  addNewGame(newGame) {
    this.games.push(newGame);
  }

  removeGame(id) {
    const game = this.getNewGamePorId(id);
    console.log(game);
    this.games = this.games.filter(game => game.id !== id);
    console.log(this.games);
    return this.games;
  }

  getGames() {
    return this.games;
  }

  getNewGamePorId(id) {
    return this.games.find(game => game.id === id);
  }

  updateNewGame(id, nome, plataforma, genero, dataLancamento, imagem, descricao) {
    const NewGame = this.getNewGamePorId(id);

    if (NewGame) {
      NewGame.name = nome;
      NewGame.platform = plataforma;
      NewGame.genre = genero;
      NewGame.released = dataLancamento;
      NewGame.image = imagem;
      NewGame.description = descricao;
    }
  }


}
