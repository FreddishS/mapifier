const transform = require('./transform');
const { invert } = require('lodash');

class Mapifier {
  constructor(config) {
    if (!config) throw new Error('You need to provide a mapping');
    this.config = config;
  }

  transform(obj) {
    return transform(this.config, obj);
  }

  transformBack(obj) {
    return transform(invert(this.config), obj);
  }
}

module.exports = Mapifier;
