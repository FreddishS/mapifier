/* eslint-env node, mocha */

const expect = require('chai').expect;
const Mapifier = require('../lib/index');

describe('Error handling', () => {
  it('Should cast an error if no mapping is provided', () => {
    expect(() => {
      new Mapifier(); // eslint-disable-line no-new
    }).to.throw('You need to provide a mapping');
  });

  it('Should not cast an error if a mapping is provided', () => {
    expect(() => {
      new Mapifier({}); // eslint-disable-line no-new
    }).to.not.throw();
  });
});
