export default class NewGame {
    constructor(nome, plataforma, genero, dataLancamento, imagem, descricao) {
        this.nome = nome;
        this.plataforma = plataforma;
        this.genero = genero;
        this.dataLancamento = dataLancamento;
        this.imagem = imagem;
        this.descricao = descricao;
        this.id = this.generateId();
    }

    getInfo() {
        return `${this.imageURL}${this.usuario}${this.nome}${this.descricao}${this.nota}${this.dataLancamento}${this.plataformas}`;
    }
    generateId() {
        return Math.floor(Math.random() * 100000);
    }
    formatedData(data) {
        const dataSplit = data.split('-');
        const dataFormatada = `${dataSplit[2]}/${dataSplit[1]}/${dataSplit[0]}`;
        return dataFormatada;
    }
}
