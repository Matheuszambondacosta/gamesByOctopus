export default class Comentario {
    constructor( imageURL, usuario, nome, descricao, nota, dataLancamento, plataformas) {
        this.imageURL = imageURL;
        this.usuario = usuario;
        this.nome = nome;
        this.descricao = descricao;
        this.nota = nota;
        this.dataLancamento = this.formatedData(dataLancamento);
        this.plataformas = plataformas;
        this.id = this.generateId();
    }

    getInfo() {
        return `${this.imageURL}${this.usuario}${this.nome}${this.descricao}${this.nota}${this.dataLancamento}${this.plataformas}`;
    }
    generateId() {
        return Math.floor(Math.random() * 1000);
    }
    formatedData(data) {
        const dataSplit = data.split('-');
        const dataFormatada = `${dataSplit[2]}/${dataSplit[1]}/${dataSplit[0]}`;
        return dataFormatada;
    }
}

