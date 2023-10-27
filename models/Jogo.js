export default class NewGame {
    constructor(name, platform, genres, released, image) {
        this.name = name;
        this.platform = platform;
        this.genres = genres;
        this.released = released;
        this.image = image;
        this.id = this.generateId();
    }
    generateId() {
        return Math.floor(Math.random() * 100000);
    }
}
