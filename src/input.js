class InputHandler {

    constructor(player) {
        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case "ArrowLeft":
                    player.moveLeft();
                    break;
                case "ArrowRight":
                    player.moveRight();
                    break;
            }
        });
        document.addEventListener('keyup', (e) => {
            switch (e.key) {
                case "ArrowLeft":
                    if (player.speed < 0) {
                        player.stop();
                    }
                    break;
                case "ArrowRight":
                    if (player.speed > 0) {
                        player.stop();
                    }
                    break;
                case "ArrowUp":
                    break;
            }
        });
    }
}

export default InputHandler;