class GameObject {

    constructor(width, height, player) {
        this.width = width;
        this.height = height;

        if (player.position.x === this.width) {
            console.log(`same x position: ${this.width} & Player position = ${player.position.x}`);
        }

        if (player.position.y === this.height) {
            console.log(`same y position: ${this.height} & Player position = ${player.position.y}`)
        }
    }

    draw(ctx, width, height) {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.width, this.height, width, height);
    }
}

export default GameObject;
