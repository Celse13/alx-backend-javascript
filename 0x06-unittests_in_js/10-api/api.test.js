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

// Test suite for /available_payments endpoint
describe('/available_payments endpoint', function() {
  it('returns status code 200', function(done) {
    request('http://localhost:7865/available_payments', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('returns correct payment methods', function(done) {
    request('http://localhost:7865/available_payments', function(error, response, body) {
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('/login endpoint', function() {
  it('returns status code 200', function(done) {
    request.post({
      url: 'http://localhost:7865/login',
      json: true,
      body: { userName: 'JohnDoe' }
    }, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('returns welcome message with username', function(done) {
    request.post({
      url: 'http://localhost:7865/login',
      json: true,
      body: { userName: 'JohnDoe' }
    }, function(error, response, body) {
      expect(body).to.equal('Welcome JohnDoe');
      done();
    });
  });
});