class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 0.2, 0, 2 * Math.PI, false);
    ctx.fillStyle = "#000";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1;
    ctx.fill();
    ctx.stroke();
  }
}
