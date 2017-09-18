'use strict'
// @flow
const config = require('./helper').getConfig();

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const connect = mongoose.createConnection('mongodb://' + config.db.server, config.db.options);

const Koa = require('koa');
const app = new Koa();

const routes = require('./routes');


connect.then(db => {

    for (let route in routes) app.use(routes[route]);

    const port = process.argv[2] || 3030;
    app.listen(port);
    console.log('Listening on: ' + port);

});


module.exports = app;
