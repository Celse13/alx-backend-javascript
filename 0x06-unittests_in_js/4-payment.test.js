const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with "SUM", 100, and 20 and log "The total is: 10"', function() {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    const logSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(stub.calledWith('SUM', 100, 20)).to.be.true;

    expect(logSpy.calledWith('The total is: 10')).to.be.true;

    stub.restore();
    logSpy.restore();
  });
});