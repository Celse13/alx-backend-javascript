const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should return a resolved promise with the correct data when success is true', function() {
    return getPaymentTokenFromAPI(true)
      .then(response => {
        expect(response).to.deep.equal({data: 'Successful response from the API'});
      });
  });
});