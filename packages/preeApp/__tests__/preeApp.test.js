'use strict';

const preeapp = require('..');
const assert = require('assert').strict;

assert.strictEqual(preeapp(), 'Hello from preeapp');
console.info("preeapp tests passed");
