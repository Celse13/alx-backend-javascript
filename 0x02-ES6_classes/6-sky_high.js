import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  getFloors() { return this.floors; }

  setFloors(floors) {
    if (typeof floors !== 'number') {
      throw new Error('Floors must be a number');
    }
    this.floors = floors;
  }

  get sqft() { return this._sqft; }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new Error('Sqft must be a number');
    }
    this._sqft = sqft;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
