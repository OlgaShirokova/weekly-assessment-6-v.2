'use strict';

const router = require('./router.js');
const koa = require('koa');
const app = new koa();
const bodyParser = require('koa-bodyparser');
var cors = require('koa-cors');

// app.use(serve('../../client'))

app.use(cors());
app.use(bodyParser());
app.use(router.allowedMethods());
app.use(router.routes());

app.listen(3001);
console.log('Server running..');
