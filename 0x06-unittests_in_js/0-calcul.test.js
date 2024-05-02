const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('sum two integers', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('sum two floats', function () {
    assert.strictEqual(calculateNumber(1.5, 3.5), 6);
  });
  it('sum two negative numbers', function () {
    assert.strictEqual(calculateNumber(-1, -3), -4);
  });
  it('sums two rounde floats rounded up', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('sums two rounded numbers', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
  it('handles negative numbers correctly', function () {
    assert.strictEqual(calculateNumber(-1.5, 2.2), 1);
  });
});
