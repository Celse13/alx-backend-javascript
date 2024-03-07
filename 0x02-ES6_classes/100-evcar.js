import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  get range() {
    return this._range;
  }

  set range(newRange) {
    if (typeof newRange !== 'string') {
      throw new TypeError('Range must be a string');
    }
    this._range = newRange;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species] || Car;
    return new Species();
  }
}
