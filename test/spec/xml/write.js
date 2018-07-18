'use strict';

var assign = require('min-dash').assign,
    isFunction = require('min-dash').isFunction;

var Helper = require('../../helper');


describe('write', function() {

  var moddle = Helper.createModdle();


  function write(element, options, callback) {
    if (isFunction(options)) {
      callback = options;
      options = {};
    }

    // skip preamble for tests
    options = assign({ preamble: false }, options);

    moddle.toXML(element, options, callback);
  }


  describe('should export types', function() {

    it('historyTimeToLive', function(done) {

      // given
      var decision = moddle.create('dmn:Decision', {
        historyTimeToLive: 'foo'
      });

      var expectedXML = [
        '<dmn:decision xmlns:dmn="http://www.omg.org/spec/DMN/20151101/dmn.xsd"',
        'xmlns:camunda="http://camunda.org/schema/1.0/dmn"',
        'camunda:historyTimeToLive="foo" />'
      ].join(' ');

      // when
      write(decision, function(err, result) {
        // then
        expect(result).to.eql(expectedXML);

        done(err);
      });
    });


    it('versionTag', function(done) {

      // given
      var decision = moddle.create('dmn:Decision', {
        versionTag: '0.1.0'
      });

      var expectedXML = [
        '<dmn:decision xmlns:dmn="http://www.omg.org/spec/DMN/20151101/dmn.xsd"',
        'xmlns:camunda="http://camunda.org/schema/1.0/dmn"',
        'camunda:versionTag="0.1.0" />'
      ].join(' ');

      // when
      write(decision, function(err, result) {
        // then
        expect(result).to.eql(expectedXML);

        done(err);
      });
    });


    it('inputVariable', function(done) {

      // given
      var inputClause = moddle.create('dmn:InputClause', {
        inputVariable: 'foobar'
      });

      var expectedXML = [
        '<dmn:inputClause xmlns:dmn="http://www.omg.org/spec/DMN/20151101/dmn.xsd"',
        'xmlns:camunda="http://camunda.org/schema/1.0/dmn"',
        'camunda:inputVariable="foobar" />'
      ].join(' ');

      // when
      write(inputClause, function(err, result) {
        // then
        expect(result).to.eql(expectedXML);

        done(err);
      });
    });

  });

});
