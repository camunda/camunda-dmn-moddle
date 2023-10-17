'use strict';


const readFile = require('../../helper').readFile,
      createModdle = require('../../helper').createModdle;


describe('read', function() {

  describe('should read extensions', function() {

    let moddle;

    beforeEach(function() {
      moddle = createModdle();
    });


    describe('camunda:historyTimeToLive', function() {

      it('on Decision', async function() {

        // given
        const xml = readFile('test/fixtures/xml/decision-camunda-historyTimeToLive.part.dmn');

        // when
        const { rootElement } = await moddle.fromXML(xml, 'dmn:Decision');

        // then
        expect(rootElement).to.jsonEqual({
          $type : 'dmn:Decision',
          historyTimeToLive : 'foo'
        });
      });

    });


    describe('camunda:versionTag', function() {

      it('on Decision', async function() {

        // given
        const xml = readFile('test/fixtures/xml/decision-camunda-versionTag.part.dmn');

        // when
        const { rootElement } = await moddle.fromXML(xml, 'dmn:Decision');

        // then
        expect(rootElement).to.jsonEqual({
          $type : 'dmn:Decision',
          versionTag : '1.0.0'
        });
      });

    });


    describe('camunda:inputVariable', function() {

      it('on InputClause', async function() {

        // given
        const xml = readFile('test/fixtures/xml/inputClause-camunda-inputVariable.part.dmn');

        // when
        const { rootElement } = await moddle.fromXML(xml, 'dmn:Definitions');
        const expected = {
          $type: 'dmn:Decision',
          id: 'decision',
          name: 'Dish',
          decisionLogic: {
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
        expect(rootElement.drgElement[0]).to.jsonEqual(expected);
      });
    });


    describe('camunda:diagramRelationId', function() {

      it('on Definitions', async function() {

        // given
        const xml = readFile('test/fixtures/xml/definitions-diagramRelationId.part.dmn');

        // when
        const { rootElement } = await moddle.fromXML(xml, 'dmn:Definitions');

        // then
        expect(rootElement).to.jsonEqual({
          $type: 'dmn:Definitions',
          diagramRelationId: 'foo'
        });

      });

    });

  });

});