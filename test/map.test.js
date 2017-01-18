/* eslint-env node, mocha */

const expect = require('chai').expect;
const Mapifier = require('../lib/index');

describe('Mapping', () => {
  it('Should map a root property to another root property', () => {
    const mapper = new Mapifier({
      key: 'value',
    });

    const startingObj = {
      key: 'value',
    };

    const endObj = mapper.transform(startingObj);

    expect(endObj).to.haveOwnProperty('value');
    expect(endObj.value).to.equal('value');
  });

  it('Should map several properties to other properties', () => {
    const mapper = new Mapifier({
      prop1: 'prop4',
      prop2: 'prop3',
    });

    const startingObj = {
      prop1: 1,
      prop2: 2,
    };

    const endObj = mapper.transform(startingObj);
    expect(endObj).to.haveOwnProperty('prop4');
    expect(endObj).to.haveOwnProperty('prop3');
    expect(endObj.prop4).to.equal(1);
    expect(endObj.prop3).to.equal(2);
  });

  it('Should map several properties to sub-properties', () => {
    const mapper = new Mapifier({
      prop1: 'prop3.prop4',
      prop2: 'prop5.prop6',
    });

    const startingObj = {
      prop1: 1,
      prop2: 2,
    };

    const endObj = mapper.transform(startingObj);
    expect(endObj).to.deep.equal({
      prop3: {
        prop4: 1,
      },
      prop5: {
        prop6: 2,
      },
    });
  });

  it('Should transform elemnt backwards', () => {
    const mapper = new Mapifier({
      prop1: 'prop3.prop4',
      prop2: 'prop5.prop6',
    });

    const startingObj = {
      prop3: {
        prop4: 1,
      },
      prop5: {
        prop6: 2,
      },
    };

    const endObj = mapper.transformBack(startingObj);
    expect(endObj).to.deep.equal({
      prop1: 1,
      prop2: 2,
    });
  });
});
