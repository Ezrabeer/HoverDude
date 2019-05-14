class Player {
    constructor(game) {
        this.gameWidth = game.gameWidth;
        this.width = 15;
        this.height = 40;
        this.speed = 0;
        this.maxSpeed = 5;
        this.collided = false;

        this.position = {
            x: this.width,
            y: game.gameHeight - (this.height * 2),
        }
    }

    draw(ctx) {
        ctx.fillStyle = '#000';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    moveLeft() {
        //fixme
        if (!this.collided) {
            this.speed = -this.maxSpeed;
        }
    }

    moveRight() {
        //fixme
        if (!this.collided) {
            this.speed = this.maxSpeed;
        }
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