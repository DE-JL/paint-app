var canvas = document.getElementById("paint");
var input = document.getElementById("hex");

canvas.style.position = "absolute";
canvas.style.top = "50%";
canvas.style.left = "50%";
canvas.style.transform = "translate(-50%, -50%)";
canvas.style.background = "white";

canvas.width = 900;
canvas.height = 900;

var ctx = canvas.getContext("2d");

let painting = false;

function startDraw(e) {
  painting = true;
  draw(e);
}

function stopDraw() {
  painting = false;
  ctx.beginPath();
}

function draw(e) {
  if (!painting) return;

  var color = input.value;

  var horizontal_offset = (window.innerWidth - canvas.width) / 2;

  ctx.lineWidth = 10;
  ctx.lineCap = "round";
  ctx.strokeStyle = color

  ctx.lineTo((e.clientX - horizontal_offset), (e.clientY - 20));
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo((e.clientX - horizontal_offset), (e.clientY - 20));
}

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mouseup", stopDraw);
canvas.addEventListener("mousemove", draw);