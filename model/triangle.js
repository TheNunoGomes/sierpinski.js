class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  mark(ctx) {
    this.a.draw(ctx);
    this.b.draw(ctx);
    this.c.draw(ctx);
  }

  draw(ctx) {
    Triangle.drawSide(ctx, this.a, this.b);
    Triangle.drawSide(ctx, this.a, this.c);
    Triangle.drawSide(ctx, this.b, this.c);
  }

  static drawSide(ctx, vertice1, vertice2) {
    ctx.beginPath();
    ctx.moveTo(vertice1.x, vertice1.y);
    ctx.lineTo(vertice2.x, vertice2.y);
    ctx.stroke();
  }
}
