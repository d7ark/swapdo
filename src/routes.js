'use strict'
const route = require('koa-route');
// @flow

const routes = {
    index: route.get('/', ctx => {
        ctx.body = 'index';
    }),

    getTodo: route.get('/todo/:id', (ctx, id) => {
        ctx.body = 'todo ' + id;
    }),

    setTodo: route.post('/todo/:id', (ctx, id) => {
        ctx.redirect = '/todo/' + id;
    }),

    login: route.get('/login', ctx => {
        ctx.body = 'login';
    }),

    logout: route.post('/logout', ctx => {
        ctx.redirect = '/login';
    }),
}

module.exports = routes;
