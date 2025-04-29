export class Calculator {
  constructor(val1, val2) {
    this.a = val1;
    this.b = val2;
  }
  add() {
    return this.a + this.b;
  }
  substract() {
    return this.a - this.b;
  }
  multiply() {
    return this.a * this.b;
  }
  divide() {
    return this.a / this.b;
  }
  modulo() {
    return this.a % this.b;
  }
}
