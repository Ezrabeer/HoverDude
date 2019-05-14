import Player from './player.js';
import Input from './input.js';
import GameObject from './gameobject.js';

const canvas = document.querySelector('#gameCanvas');
const ctx = canvas.getContext('2d');

const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;

// Clear everything from screen when canvas is initialised
ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

const player = new Player(GAME_WIDTH, GAME_HEIGHT);
const gameObject = new GameObject(400, 400, player);

// Draw player on screen
player.draw(ctx);

// fixme only for testing purposes
gameObject.draw(ctx, 500, 500);

// The keyboard input listener
new Input(player);

let lastTime = 0;

function tick(timestamp) {
    const time = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0,0, GAME_WIDTH, GAME_HEIGHT);
    player.update(time);
    player.draw(ctx);
    gameObject.draw(ctx, 500, 500);


    requestAnimationFrame(tick);
}

tick();