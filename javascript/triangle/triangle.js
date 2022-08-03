//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }
  
  isTriangle() {
    const [a, b, c] = this.sides;
    if (a + b >= c && b + c >= a && c + a >= b && this.sides.every(side => side > 0)) return true;
  }
  
  get isEquilateral() {
    if (this.isTriangle()) return this.sides.every(side => side === this.sides[0]);
    else return false;
  }
  get isIsosceles() {
    if (this.isTriangle()) return new Set(this.sides).size !== this.sides.length;
    else return false;
  }
  get isScalene() {
    if (this.isTriangle() && !this.isIsosceles) return true;
    else return false;
  }
  get degTriangle() {
    const sortedArr = this.sides.sort((a, b) => a - b)
    const [a, b, c] = sortedArr;
    return a + b <= c ? true : false;
  }
}
