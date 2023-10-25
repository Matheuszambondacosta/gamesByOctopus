export default class NewGame {
    constructor(name, platforms, genres, released, image, description) {
        this.name = name;
        this.platforms = platforms;
        this.genres = genres;
        this.released = released;
        this.image = image;
        this.description = description;
        this.id = this.generateId();
    }

    getInfo() {
        return `${this.imageURL}${this.usuario}${this.name}${this.description}${this.nota}${this.released}${this.platforms}`;
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
