class Ladder {

    constructor(game, x, y, size) {
        this.game = game;

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.position = {
            x: x,
            y: y,
        };
        this.size = size;
    }

    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.size, this.size);
    }

    update(deltaTime) {
        if (this.game.player.position.x + this.size > this.position.x) {
            this.game.player.stop();
            this.game.player.collided = true;
        }

        if (this.game.player.position.x < this.position.x + this.size) {
            // this.game.player.stop();
        }
    }
}

export default Ladder;