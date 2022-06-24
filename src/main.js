const NUM_POINTS = 100000;
const MIN_X = 300;
const MAX_X = 700;
const UPPER_X = (MIN_X + MAX_X) / 2;
const UPPER_Y = 300;
const LOWER_Y = 700;

const canvas = document.getElementById("map");

const ctx = canvas.getContext("2d");

const vertices = [
  new Point(MIN_X, LOWER_Y),
  new Point(MAX_X, LOWER_Y),
  new Point(UPPER_X, UPPER_Y),
];

const triangle = new Triangle(vertices[0], vertices[1], vertices[2]);

const origin = new Point(100, 900);
const xAxisEnd = new Point(900, 900);
const yAxisEnd = new Point(100, 100);
const xAxis = new Axis(origin, xAxisEnd);
const yAxis = new Axis(origin, yAxisEnd);

triangle.draw(ctx);
xAxis.draw(ctx);
yAxis.draw(ctx);

triangle.sierpinski(ctx, NUM_POINTS);
