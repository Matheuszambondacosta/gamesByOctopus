import NewGame from "./Jogo";

export default class NewGameList {
  constructor() {
    this.games = [];
  }

  addNewGame(nome, plataforma, genero, dataLancamento, imagem, descricao) {
    const novoNewGame = new NewGame(nome, plataforma, genero, dataLancamento, imagem, descricao);
    this.games.push(novoNewGame);
    this.updateValues();
  }

  removeGame(game) {
    this.games = this.games.filter(item => item.uuid !== game.uuid);
  }

  getGames() {
    return this.games;
  }

  getNewGamePorId(id) {
    return this.games.find(game => game.id === id);
  }

  updateValues() {
    this.games.forEach((game) => {
      game.id = this.generateId();
    });
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

  removeNewGame(id) {
    const NewGame = this.getNewGamePorId(id);
    const index = this.games.indexOf(NewGame);
    
    if (index !== -1) {
      this.games.splice(index, 1);
    }
  }
}
