export default class NewGame {
    constructor(name, platform, genre, released, image, description) {
        this.name = name;
        this.platform = platform;
        this.genre = genre;
        this.released = released;
        this.image = image;
        this.description = description;
        this.id = this.generateId();
    }
    generateId() {
        return Math.floor(Math.random() * 100000);
    }
}
