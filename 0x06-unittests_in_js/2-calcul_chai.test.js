const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('sums two rounded numbers', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('SUBTRACT', function() {
    it('subtracts two rounded numbers', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('DIVIDE', function() {
    it('divides two rounded numbers', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('returns "Error" when dividing by 0', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  describe('Edge cases and error handling', function() {
    it('handles invalid type', function() {
      expect(calculateNumber('MULTIPLY', 1.4, 4.5)).to.equal('Error');
    });
  });
});