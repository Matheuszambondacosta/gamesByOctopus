import Comentario from "./Jogo.js"

export default class ListaJogo {
  constructor() {
    this.historico = [];
  }

  addComentario(imageURL, usuario, nome, descricao, nota, dataLancamento, plataformas) {
    const novoComentario = new Comentario(imageURL, usuario, nome, descricao, nota, dataLancamento, plataformas);

    console.log("Foi chamado pelo front");
    console.log(novoComentario);

    this.historico.push(novoComentario);

    this.atualizarValores();
  }

  getHistorico() {
    return this.historico;
  }

  getComentarioPorId(id) {
    const comentario = this.historico.find((comentario) => comentario.id == id);

    return comentario;
  }

  atualizarComentario(id, imageURL, usuario, nome, descricao, nota, dataLancamento, plataformas) {
    const comentario = this.getComentarioPorId(id);

    if (comentario) {
      comentario.imageURL = imageURL;
      comentario.usuario = usuario;
      comentario.nome = nome;
      comentario.descricao = descricao;
      comentario.nota = nota;
      comentario.dataLancamento = dataLancamento;
      comentario.plataformas = plataformas;
    }

    this.atualizarValores();

    return comentario;
  }

  excluirComment(id) {
    this.historico = this.historico.filter((comentario) => comentario.id != id);

    this.atualizarValores();
  }

  atualizarValores() {
    this.imageURL = '';
    this.usuario = '';
    this.nome = '';
    this.descricao = '';
    this.nota = '';
    this.dataLancamento = '';
    this.plataformas = '';
  }
}