const NUM_POINTS = 100000;

const canvas = document.getElementById("map");

const ctx = canvas.getContext("2d");

const origin = new Point(100, 900);
const xAxisEnd = new Point(900, 900);
const yAxisEnd = new Point(100, 100);

const vertices = [
  new Point(300, 700),
  new Point(700, 700),
  new Point(500, 300),
];

const triangle = new Triangle(vertices[0], vertices[1], vertices[2]);

const xAxis = new Axis(origin, xAxisEnd);
const yAxis = new Axis(origin, yAxisEnd);

triangle.draw(ctx);
xAxis.draw(ctx);
yAxis.draw(ctx);

let point = new Point(600, 600);

drawSierpinskiTriangle();

async function drawSierpinskiTriangle() {
  for (let i = 0; i < NUM_POINTS; i++) {
    point.draw(ctx);

    const vertice = vertices[Math.floor(Math.random() * 3)];

    const middleX = (vertice.x + point.x) / 2;
    const middleY = (vertice.y + point.y) / 2;

    point = new Point(middleX, middleY);
    // await delay(1);
  }
}

function delay(time) {
  if (!time) return;
  return new Promise((resolve) => setTimeout(resolve, time));
}
