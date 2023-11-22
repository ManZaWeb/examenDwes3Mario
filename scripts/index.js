import { Ball } from "./ball.js";

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;//2 innerWidth no innerHeigth
const height = canvas.height = window.innerHeight;







function loop() {
    ctx.fillStyle = 'rgba(0, 245, 0, 0.25)';//3 error fondo 245 por 0
    ctx.fillRect(0, 0, width, height);

    for (const ball of balls) {
        ball.draw();
        ball.update();
        for (const otherBall of balls) {
            if (ball !== otherBall) {
                ball.collisionDetect(otherBall);
            }
        }
    }

    requestAnimationFrame(loop);
}

loop();