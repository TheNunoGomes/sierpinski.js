class Axis {
  constructor(startPoint, endPoint) {
    this.startPoint = startPoint;
    this.endPoint = endPoint;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.startPoint.x, this.startPoint.y);
    ctx.lineTo(this.endPoint.x, this.endPoint.y);
    this.#drawArrow(ctx);
    ctx.stroke();
  }

  #drawArrow(ctx) {
    var headlen = 10; // length of head in pixels
    var dx = this.endPoint.x - this.startPoint.x;
    var dy = this.endPoint.y - this.startPoint.y;
    var angle = Math.atan2(dy, dx);
    ctx.lineTo(
      this.endPoint.x - headlen * Math.cos(angle - Math.PI / 6),
      this.endPoint.y - headlen * Math.sin(angle - Math.PI / 6)
    );
    ctx.moveTo(this.endPoint.x, this.endPoint.y);
    ctx.lineTo(
      this.endPoint.x - headlen * Math.cos(angle + Math.PI / 6),
      this.endPoint.y - headlen * Math.sin(angle + Math.PI / 6)
    );
  }
}
