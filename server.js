'use strict'

const Koa = require('koa');
const app = new Koa();


app.use(async (ctx) => {
    ctx.body = 'Under construction.';
});

const port = process.argv[2] || 3030;
app.listen(port);
console.log('Listening on: ' + port);
