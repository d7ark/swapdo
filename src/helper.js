'use strict';
const fs = require('fs');
// @flow

// module.exports = (a: number, b: number): number => a + b;

function getConfig(value: null): object {
    const config = fs.readFileSync('./config.json');
    return JSON.parse(config);
}

var sum = (a, b) => a + b;

module.exports = {
    getConfig,
    sum,
};
