'use strict';


var readFile = require('../../helper').readFile,
    createModdle = require('../../helper').createModdle;


describe('read', function() {

  describe('should read extensions', function() {

    var moddle;

    beforeEach(function() {
      moddle = createModdle();
    });


    describe('camunda:historyTimeToLive', function() {

      it('on Decision', function(done) {

        // given
        var xml = readFile('test/fixtures/xml/decision-camunda-historyTimeToLive.part.dmn');

        // when
        moddle.fromXML(xml, 'dmn:Decision', function(err, proc) {

          // then
          expect(err).to.be.undefined;
          expect(proc).to.jsonEqual({
            $type : 'dmn:Decision',
            historyTimeToLive : 'foo'
          });

          done(err);

        });

      });

    });


    describe('camunda:versionTag', function() {

      it('on Decision', function(done) {

        // given
        var xml = readFile('test/fixtures/xml/decision-camunda-versionTag.part.dmn');

        // when
        moddle.fromXML(xml, 'dmn:Decision', function(err, proc) {

          // then
          expect(err).to.be.undefined;
          expect(proc).to.jsonEqual({
            $type : 'dmn:Decision',
            versionTag : '1.0.0'
          });

          done(err);

        });

      });

    });


    describe('camunda:inputVariable', function() {

      it('on InputClause', function(done) {

        // given
        var xml = readFile('test/fixtures/xml/inputClause-camunda-inputVariable.part.dmn');

        // when
        moddle.fromXML(xml, 'dmn:Definitions', function(err, proc) {

          var expected = {
            $type: 'dmn:Decision',
            id: 'decision',
            name: 'Dish',
            decisionTable: {
              $type: 'dmn:DecisionTable',
              id: 'decisionTable',
              input: [
                {
                  $type: 'dmn:InputClause',
                  id: 'input1',
                  label: 'Season',
                  inputVariable: 'currentSeason'
                }
              ]
            }
          };

          // then
          expect(err).to.be.undefined;
          expect(proc.drgElements[0]).to.jsonEqual(expected);

          done(err);

        });

      });

    });


    describe('camunda:diagramRelationId', function() {

      it('on Definitions', function(done) {

        // given
        var xml = readFile('test/fixtures/xml/definitions-diagramRelationId.part.dmn');

        // when
        moddle.fromXML(xml, 'dmn:Definitions', function(err, definition) {

          // then
          expect(definition).to.jsonEqual({
            $type: 'dmn:Definitions',
            diagramRelationId: 'foo'
          });

          done(err);
        });

      });

    });

  });

});