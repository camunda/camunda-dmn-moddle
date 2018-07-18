# camunda-dmn-moddle

This project defines the [Camunda](https://camunda.org) namespace extensions for DMN 1.1 as a [moddle](https://github.com/bpmn-io/moddle) descriptor.


## Usage

Use it together with [dmn-moddle](https://github.com/bpmn-io/dmn-moddle) to validate Camunda DMN 1.1 extensions.

```javascript
var DmnModdle = require('dmn-moddle');

var camundaModdle = require('camunda-bpmn-moddle/resources/camunda');

var moddle = new DmnModdle({ camunda: camundaModdle });

var decision = moddle.create('dmn:Decision', {
  'historyTimeToLive': 'foo'
});
```


## Building the Project

To run the test suite that includes XSD schema validation you must have a Java JDK installed and properly exposed through the `JAVA_HOME` variable.

Execute the test via

```
npm test
```

Perform a complete build of the application via

```
npm run all
```

This extension makes use of dependency injection via [didi](https://github.com/nikku/didi) and expects an events interface such as [`eventBus`](https://github.com/bpmn-io/diagram-js/blob/master/lib/core/EventBus.js), where we plugin and listen to the `property.clone` event.


## License

Use under the terms of the [MIT license](http://opensource.org/licenses/MIT).

