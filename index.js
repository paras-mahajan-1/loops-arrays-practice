console.log("connection working....")
// document.body.style.backgroundColor = "red"

// creating 100 random circles on the screen

const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
})
// checking the canvas height and canvas width
console.log(`canvas-width: ${canvas.width}\ncanvas-height ${canvas.height}`)

function random(number) {
    return Math.floor(Math.random() * number);
};

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.fillStyle = "rgb(255 0 0 / 50%";
        ctx.arc(
            random(canvas.width),
            random(canvas.height),
            random(50),
            0,
            endAngle = 2*Math.PI,
        );
        ctx.fill();
    }
}

btn.addEventListener("click", draw)

// MDN DOCS loops first exercise done