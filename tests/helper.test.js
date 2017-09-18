'use strict';
const helper = require('../lib/helper');

test('get config file', () => {
    const config = helper.getConfig();
    expect(typeof config).toBe('object');
});

test('get db adress from config file', () => {
    const config = helper.getConfig();
    expect(config.db.server).toBe('localhost/swapdo');
    expect(config.test.db.server).toBe('localhost/swapdotest');
});
