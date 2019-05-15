class Player {
    constructor(game, img) {
        this.gameWidth = game.gameWidth;
        this.width = 28;
        this.height = 51;
        this.player = img;
        this.speed = 0;
        this.maxSpeed = 5;

        this.position = {
            x: this.width,
            y: game.gameHeight - (this.height * 2),
        }
    }

    draw(ctx) {
        ctx.drawImage(this.player, this.position.x, this.position.y, this.width, this.height);
    }

    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = this.maxSpeed;
    }

    stop() {
        this.speed = 0;
    }

    update() {
        this.position.x += this.speed;

        if (this.position.x < 0) {
            this.position.x = 0;
        }

        if (this.position.x + this.width > this.gameWidth) {
            this.position.x = this.gameWidth - this.width;
        }
    }
}

export default Player;