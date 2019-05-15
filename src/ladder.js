class Ladder {

    constructor(game, x, y, size) {
        this.game = game;

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.ladder = document.querySelector('#img_ladder');

        this.position = {
            x: x,
            y: y,
        };
        this.size = size;
    }

    climb() {
        this.game.player.allowedClimb =
            this.game.player.position.x > this.position.x - this.size
            && this.game.player.position.x < this.position.x + this.size
            && this.game.player.position.y > this.position.y - this.game.player.height
            && this.game.player.position.y < this.position.y + this.size;
    }

    draw(ctx) {
        ctx.drawImage(this.ladder, this.position.x, this.position.y, this.size, this.size);
        ctx.strokeStyle = 'red';
        ctx.strokeRect(this.position.x, this.position.y, this.size, this.size);
    }

    update() {
        console.log(this.game.player.allowedClimb);
        this.climb();
        if (this.game.player.position.x + this.size > this.position.x) {
        }

        if (this.game.player.position.x < this.position.x + this.size) {
            // this.game.player.stop();
        }
    }
}

export default Ladder;