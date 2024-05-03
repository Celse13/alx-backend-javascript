const expect = require('chai').expect;
const request = require('request');

describe('Index page', function() {
  it('returns status code 200', function(done) {
    request('http://localhost:7865', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('returns correct result', function(done) {
    request('http://localhost:7865', function(error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
  
  describe('Cart page', function() {
    it('returns status code 200 when :id is a number', function(done) {
      request('http://localhost:7865/cart/12', function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  
    it('returns "Payment methods for cart 12" when :id is 12', function(done) {
      request('http://localhost:7865/cart/12', function(error, response, body) {
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });
  
    it('returns status code 404 when :id is NOT a number', function(done) {
      request('http://localhost:7865/cart/hello', function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
});