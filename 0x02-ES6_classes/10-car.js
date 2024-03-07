export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() { return this._brand; }

  set brand(newBrand) {
    if (typeof newBrand !== 'string') {
      throw new TypeError('Brand must be a string');
    }
    this._brand = newBrand;
  }

  get motor() { return this._motor; }

  set motor(newMotor) {
    if (typeof newMotor !== 'string') {
      throw new TypeError('Motor must be a string');
    }
    this._motor = newMotor;
  }

  get color() { return this._color; }

  set color(newColor) {
    if (typeof newColor !== 'string') {
      throw new TypeError('Color must be a string');
    }
    this._color = newColor;
  }

  cloneCar() {
    return new this.constructor();
  }
}
