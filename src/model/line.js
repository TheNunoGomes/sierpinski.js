class Line {
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }

  // y = mx + b
  f(x) {
    const m = (this.p1.y - this.p2.y) / (this.p1.x - this.p2.x);
    const b = this.p1.y - m * this.p1.x;

    return m * x + b;
  }

  Straight(ctx) {
    const bigX = 10000;
    const bigY = this.f(bigX);

    const smallX = -10000;
    const smallY = this.f(smallX);

    ctx.beginPath();
    ctx.moveTo(smallX, smallY);
    ctx.lineTo(bigX, bigY);
    ctx.stroke();
  }

  Segment(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.p1.x, this.p1.y);
    ctx.lineTo(this.p2.x, this.p2.y);
    ctx.stroke();
  }

  static Ray(ctx, anchor, point) {
    const line = new Line(anchor, point);
    const flip = anchor.x < point.x ? 1 : -1;

    const farX = flip * 10000;
    const farY = line.f(farX);

    ctx.beginPath();
    ctx.moveTo(anchor.x, anchor.y);
    ctx.lineTo(farX, farY);
    ctx.stroke();
  }
}
