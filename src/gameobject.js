class GameObject {

    constructor(width, height, player) {
        this.position = {
            x: width,
            y: height,
        };

        if (player.position.x === this.x) {
            console.log(`same x position: ${this.x} & Player position = ${player.position.x}`);
        }

        if (player.position.y === this.y) {
            console.log(`same y position: ${this.y} & Player position = ${player.position.y}`)
        }
    }

    draw(ctx, width, height) {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, width, height);
    }

    get getX() {
        return this.x;
    }

    get getY() {
        return this.y;
    }

    set setX(x) {
        this.x = x;
    }

    set setY(y) {
        this.y = y;
    }
}

export default GameObject;
