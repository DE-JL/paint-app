var canvas = document.getElementById("paint");
var ctx = canvas.getContext("2d");
var pos = {x: 0, y: 0};

function draw(e) {
    if (e.buttons !== 1) return;

    var color = document.getElementById("hex").value;

    ctx.beginPath();

    ctx.lineWidth = 20;
    ctx.lineCap = "round";
    ctx.strokeStyle = color;

    ctx.moveTo(pos.x, pos.y);
    setPosition(e);
    ctx.lineTo(pos.x, pos.y);

    ctx.stroke();
}

function setPosition(e) {

}

document.addEventListener("mousedown", draw);
document.addEventListener("mouseenter", setPosition);
document.addEventListener("mousemove", setPosition);

