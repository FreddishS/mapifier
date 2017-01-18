const { each, set, get } = require('lodash');

module.exports = (config, object) => {
  const newObj = {};

  each(config, (destinationProp, sourceProp) => {
    set(newObj, destinationProp, get(object, sourceProp));
  });

  return newObj;
};
