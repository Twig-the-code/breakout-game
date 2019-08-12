console.log("toimiiko?");

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height - 30;

let dx = 2;
let dy = -2;
let ballColor = "#0095DD";
const ballRadius = 10

//esimerkkejä
const f0 = (a, b, c) => {
  console.log(a + b + c);
};
const f1 = widht => height => depths => {};

function f11(a) {
  return function(b) {
    return function(c) {
      console.log(a + b - c);
    };
  };
}

f0(1, 2, 3);
f1(1)(2)(3);
f11(1)(3)(2);

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  bounceCollisionToEdges()
  x += dx;
  y += dy;
};
setInterval(draw, 10);



const drawBall = () => {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = ballColor;
  ctx.fill();
  ctx.closePath();
};

const getRandomColor = () => '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);

const bounceCollisionToEdges = () => {
  if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
    ballColor = getRandomColor();

}

  if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
    dy = -dy;
    ballColor = getRandomColor();
  }
}
