import NewGame from "./Jogo";

export default class NewGameList {
  constructor() {
    this.games = [];
  }

  addNewGame(newGame) {
    this.games.push(newGame);
    this.updateValues();
  }

  removeGame(id) {
    this.games = this.games.filter(game => game.id !== id);
    this.updateValues();
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
    this.totalGames = this.games.length;
    this.totalGamesRead = this.games.filter(game => game.lido).length;
    this.totalGamesNotRead = this.games.filter(game => !game.lido).length;
  }
}
