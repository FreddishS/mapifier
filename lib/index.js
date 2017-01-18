const transform = require('./transform');

class Mapifier {
  constructor(config) {
    if (!config) throw new Error('You need to provide a mapping');
    this.config = config;
  }

  transform(obj) {
    return transform(this.config, obj);
  }
}

module.exports = Mapifier;
