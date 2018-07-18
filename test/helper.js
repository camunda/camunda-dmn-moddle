'use strict';

var fs = require('fs');


function readFile(filename) {
  return fs.readFileSync(filename, { encoding: 'UTF-8' });
}

module.exports.readFile = readFile;


var DmnModdle = require('dmn-moddle').default;

var camundaDescriptor = require('../resources/camunda');

function createModdle() {
  return new DmnModdle({
    camunda: camundaDescriptor
  });
}

module.exports.createModdle = createModdle;