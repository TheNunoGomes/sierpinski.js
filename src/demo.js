const NUM_POINTS = 100000;
const MIN_X = 300;
const MAX_X = 700;
const UPPER_X = (MIN_X + MAX_X) / 2;
const UPPER_Y = 300;
const LOWER_Y = 700;

const canvas = document.getElementById("map");
const ctx = canvas.getContext("2d");

const vertices = [
  new Point(MIN_X, 600),
  new Point(MAX_X, LOWER_Y),
  new Point(UPPER_X, UPPER_Y),
];

(async () => {
  await delay(3000);
  new Triangle(vertices[0], vertices[1], vertices[2]).sierpinski(
    ctx,
    NUM_POINTS,
    true
  );
})();
