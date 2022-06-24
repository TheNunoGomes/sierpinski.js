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

  getArea() {
    return Math.abs(
      (this.a.x * (this.b.y - this.c.y) +
        this.b.x * (this.c.y - this.a.y) +
        this.c.x * (this.a.y - this.b.y)) /
        2.0
    );
  }

  draw(ctx) {
    new Line(this.a, this.b).Segment(ctx);
    new Line(this.a, this.c).Segment(ctx);
    new Line(this.b, this.c).Segment(ctx);
  }

  async sierpinski(ctx, n, slow = false) {
    let point = this.#getRandomPoint();

    for (let i = 0; i < n; i++) {
      point.draw(ctx);

      const vertices = [this.a, this.b, this.c];
      const vertice = vertices[Math.floor(Math.random() * 3)];

      const middleX = (vertice.x + point.x) / 2;
      const middleY = (vertice.y + point.y) / 2;

      point = new Point(middleX, middleY);
      slow && !(i % 50) && (await delay(1));
    }
  }

  #getRandomPoint() {
    const minY = Math.min(this.a.y, this.b.y, this.c.y);
    const maxY = Math.max(this.a.y, this.b.y, this.c.y);
    const minX = Math.min(this.a.x, this.b.x, this.c.x);
    const maxX = Math.max(this.a.x, this.b.x, this.c.x);

    do {
      const randomX = getRandomNumber(minX, maxX);
      const randomY = getRandomNumber(minY, maxY);
      const point = new Point(randomX, randomY);

      if (point.isInsideTriangle(this)) {
        return point;
      }
    } while (true);
  }
}
