class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  isInsideTriangle(triangle) {
    const PBC = new Triangle(this, triangle.b, triangle.c).getArea();
    const ABP = new Triangle(triangle.a, triangle.b, this).getArea();
    const APC = new Triangle(triangle.a, this, triangle.c).getArea();

    return triangle.getArea() === PBC + ABP + APC;
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

  log() {
    console.log(`(${this.x}, ${this.y})`);
  }
}
