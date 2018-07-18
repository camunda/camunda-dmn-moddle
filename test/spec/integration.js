'use strict';

var DmnModdle = require('dmn-moddle').default;

var camundaDescriptor = require('../../resources/camunda');

describe('exports', function() {

  it('should extend dmn-moddle', function() {

    // given
    var moddle = new DmnModdle({
      camunda: camundaDescriptor
    });

    // when
    var decision = moddle.create('dmn:Decision');

    // then
    expect(decision.$instanceOf('camunda:Decision')).to.be.true;
  });

});