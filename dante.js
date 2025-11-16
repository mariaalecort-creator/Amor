const canvas = document.getElementById("hilosCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();

window.addEventListener("resize", resizeCanvas);

// Cantidad de hilos rojos
const hilos = [];
const cantidad = 60;

for (let i = 0; i < cantidad; i++) {
    hilos.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: 20 + Math.random() * 40,
        speed: 1 + Math.random() * 2,
        width: 1 + Math.random() * 2
    });
}

function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let hilo of hilos) {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255, 0, 0, 0.8)";
        ctx.lineWidth = hilo.width;
        ctx.moveTo(hilo.x, hilo.y);
        ctx.lineTo(hilo.x, hilo.y + hilo.length);
        ctx.stroke();

        hilo.y += hilo.speed;

        if (hilo.y > canvas.height) {
            hilo.y = -hilo.length;
            hilo.x = Math.random() * canvas.width;
        }
    }

    requestAnimationFrame(animar);
}

animar();