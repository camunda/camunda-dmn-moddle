'use strict';

var Helper = require('./helper');


module.exports.fromFile = function(moddle, file, done) {
  var fileContents = Helper.readFile(file);

  moddle.fromXML(fileContents, 'bpmn:Definitions', done);
};

module.exports.toXML = function(element, opts, done) {
  element.$model.toXML(element, opts, done);
};