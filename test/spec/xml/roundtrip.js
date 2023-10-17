'use strict';

const readFile = require('../../helper').readFile,
      createModdle = require('../../helper').createModdle;



describe('import -> export roundtrip', function() {

  function stripSpaces(xml) {
    return xml.replace(/\n|\r/g, '')
      .replace(/\s{2,}/g, ' ')
      .replace(/\s\/>/g, '/>')
      .replace(/>\s+</g, '><');
  }

  function validateExport(file) {

    return async function() {

      const xml = stripSpaces(readFile(file));

      const moddle = createModdle();

      const { rootElement } = await moddle.fromXML(xml, 'dmn:Definitions');

      const { xml: savedXML } = await moddle.toXML(rootElement);

      expect(stripSpaces(savedXML)).to.eql(xml);

    };
  }


  describe('should keep camunda attributes', function() {

    it('camunda:Decision', validateExport('test/fixtures/xml/decision-camunda.dmn'));

  });

});
