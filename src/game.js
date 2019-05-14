import Ladder from "./ladder.js";
import Player from "./player.js";
import Input from "./input.js";

class Game {

    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start() {
        this.player = new Player(this);
        this.ladder = new Ladder(this, 50, 650, 16);
        this.gameObjects = [this.player, this.ladder];

        new Input(this.player);
    }

    update(deltaTime) {
        this.gameObjects.forEach(object => object.update(deltaTime));
    }

    draw(ctx) {
        this.gameObjects.forEach(object => object.draw(ctx));
    }
}

export default Game;