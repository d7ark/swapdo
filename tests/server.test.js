'use strict';
// const request = require('supertest');
const helper = require('../lib/helper');

test('adds 1 + 2 to equal 3', () => {
  expect(helper.sum(1, 2)).toBe(3);
});
// const assert = require('assert');
// const app = require('../lib/server');
// const Koa = require('koa');
// const test = require('tape');
// const app = new Koa();

// describe('check app listen on 3030', () => {
//     test('Should return true', () => {
//         return request(require('../lib/server'))
//             .get('/')
//             .expect(404)
//             .then(console.log);
//     });
// });








//
// test('123', () => {
//     expect(helper(1,1)).toBe(2);
// });

// request(app.listen(3030))
//     .get('/')
//     .expect(404)
//     .then(response => {
//         ('Should get \'Not Found\'', function (t) {
//             t.equal(response.text, 'Not Found');
//             t.end();
//         });
//     }, reject => {
//         console.log('reject: ' + reject);
//     });
// console.log(asd);

// test('Should get "Not Found" and 404 for unsupported path', function (t) {
//     t.equal(1, 1);
//     t.end();
// });
