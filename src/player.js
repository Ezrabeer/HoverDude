class Player {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.width = 15;
        this.height = 40;
        this.speed = 0;
        this.maxSpeed = 2;

        this.position = {
            x: this.width,
            y: gameHeight - (this.height * 2),
        }
    }

    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
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

    update(time) {
        if (!time) return;
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