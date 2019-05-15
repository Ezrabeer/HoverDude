class Player {
    constructor(game, img) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.player = img;

        this.allowedClimb = false;

        this.speed = 0;
        this.maxSpeed = 5;

        this.verticalSpeed = 0;
        this.verticalMaxSpeed = 5;

        this.width = 28;
        this.height = 51;
        this.position = {
            x: this.width,
            y: game.gameHeight - (this.height * 2),
        }
    }

    draw(ctx) {
        ctx.drawImage(this.player, this.position.x, this.position.y, this.width, this.height);
        ctx.strokeStyle = 'red';
        ctx.strokeRect(this.position.x, this.position.y, this.width, this.height);
    }

    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = this.maxSpeed;
    }

    moveUp() {
        if (this.allowedClimb) {
            this.verticalSpeed = -this.verticalMaxSpeed;
        }
    }

    moveDown() {
        this.verticalSpeed = this.verticalMaxSpeed;
    }

    stop() {
        this.speed = 0;
        this.verticalSpeed = 0;
    }

    update() {
        this.position.x += this.speed;
        this.position.y += this.verticalSpeed;

        if (this.position.x < 0) {
            this.position.x = 0;
        }

        if (this.position.y < 0) {
            this.position.y = 0;
        }

        if (this.position.x + this.width > this.gameWidth) {
            this.position.x = this.gameWidth - this.width;
        }

        if (this.position.y + this.height > this.gameHeight) {
            this.position.y = this.gameHeight - this.height;
        }
    }
}

export default Player;