class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  show() {
    console.log(`(${this.x}, ${this.y})`)
  }
  isEqual(point) {
    return this.x === point.x && this.y === point.y ? true : false
  }

  distance(pt2) {
    // pour x : (xb - xa) au carré = (xb au carré) - (2 * xb *xa) + (xa au carré)
    let xb = this.x * this.x
    let xi = 2 * this.x * this.y
    let xa = this.y * this.y
    let x = xb - xi + xa

    // pour y :(yb - ya) au carré = (yb au carré) - (2 * yb * ya) + (ya au carré)

    let yb = pt2.x * pt2.x
    let yi = 2 * pt2.x * pt2.y
    let ya = pt2.y * pt2.y
    let y = yb - yi + ya

    return (Math.sqrt(x + y))
  }
}
const p1 = new Point(1, 2)
const p2 = new Point(10, 11)

console.log(p1.distance(p2))

