import { balls } from "./ball.js";

import { ctx, height, width } from "./ball.js";


export function loop() {
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