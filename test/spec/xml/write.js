'use strict';

const assign = require('min-dash').assign;

const Helper = require('../../helper');


describe('write', function() {

  const moddle = Helper.createModdle();


  function write(element, options = {}) {

    // skip preamble for tests
    options = assign({ preamble: false }, options);

    return moddle.toXML(element, options).then(({ xml }) => xml);
  }


  describe('should export types', function() {

    it('historyTimeToLive', async function() {

      // given
      const decision = moddle.create('dmn:Decision', {
        historyTimeToLive: 'foo'
      });

      const expectedXML = [
        '<dmn:decision xmlns:dmn="https://www.omg.org/spec/DMN/20191111/MODEL/"',
        'xmlns:camunda="http://camunda.org/schema/1.0/dmn"',
        'camunda:historyTimeToLive="foo" />'
      ].join(' ');

      // when
      const result = await write(decision);

      // then
      expect(result).to.eql(expectedXML);
    });


    it('versionTag', async function() {

      // given
      const decision = moddle.create('dmn:Decision', {
        versionTag: '0.1.0'
      });

      const expectedXML = [
        '<dmn:decision xmlns:dmn="https://www.omg.org/spec/DMN/20191111/MODEL/"',
        'xmlns:camunda="http://camunda.org/schema/1.0/dmn"',
        'camunda:versionTag="0.1.0" />'
      ].join(' ');

      // when
      const result = await write(decision);

      // then
      expect(result).to.eql(expectedXML);
    });


    it('inputVariable', async function() {

      // given
      const inputClause = moddle.create('dmn:InputClause', {
        inputVariable: 'foobar'
      });

      const expectedXML = [
        '<dmn:inputClause xmlns:dmn="https://www.omg.org/spec/DMN/20191111/MODEL/"',
        'xmlns:camunda="http://camunda.org/schema/1.0/dmn"',
        'camunda:inputVariable="foobar" />'
      ].join(' ');

      // when
      const result = await write(inputClause);

      // then
      expect(result).to.eql(expectedXML);
    });

  });

});
