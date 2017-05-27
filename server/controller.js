'use strict';
// const router = require('koa-router')()

const model = require('./model.js');

exports.getEvents = async (ctx) => {
  let temp = await model.retrieve();
  ctx.body = temp;
};

exports.postEvents = async (ctx) => {
  const evt = ctx.request.body;
  await model.insert(evt);
  ctx.status = 200;
  //let event = new model(ctx.request.body)
  //event.save()
  //ctx.body = 'post'
};

// module.exports = router.routes()
