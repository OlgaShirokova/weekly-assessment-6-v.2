'use strict';

const app = require('koa');
const Router = require('koa-router');
const router = new Router();
// const model = require('./model.js');
const controller = require('./controller.js');

router.post('/events', controller.postEvents);
router.get('/events', controller.getEvents);

module.exports = router;
