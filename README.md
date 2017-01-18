# Mapifier module
*Transform objects in a breeze*

## Install
`$ npm install mapifier`

## Description
This module provides an easy way to transform objects
between two structures. You provide a mapping configuration
and can then send objects through and get them the way you want.
With one config you are also able to transform the object back
to the original structure.

## Example
```javascript
const Mapifier = require('mapifier');

const mapifier = new Mapifier({
  'sourceProperty' : 'destinationProperty',
  'deep.property': 'another.deep.property',
})

const newObject = mapifier.transform({
  sourceProperty: 'I were a source property',
  deep: {
    property: 'I were a deep property',
  },
});

// newObject is  { destinationProperty: 'I were a source property', another: { deep: { property: 'I were a deep property' } } }

const oldObject = mapifier.transformBack(newObject);

// oldObject is { sourceProperty: 'I were a source property', deep: { property: 'I were a deep property' } }
```