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
    this.updateValues();
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
      NewGame.nome = nome;
      NewGame.plataforma = plataforma;
      NewGame.genero = genero;
      NewGame.dataLancamento = dataLancamento;
      NewGame.imagem = imagem;
      NewGame.descricao = descricao;
    }
  }
  

  updateValues() {
    this.games.forEach((game) => {
      game.updateValues();
    });
  }

}
