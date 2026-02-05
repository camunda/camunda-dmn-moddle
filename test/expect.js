var { use: chaiUse, expect } = require('chai');

// add matchers
chaiUse(require('./matchers'));

// expose expect as global
global.expect = expect;