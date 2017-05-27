'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/eventDB');

const db = mongoose.connection;
mongoose.Promise = global.Promise;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});

let eventSchema = mongoose.Schema({
    title: String,
    date: Date,
    venue: String
});

let userEvent = mongoose.model('userEvent', eventSchema);

exports.retrieve = async () => {
  return await userEvent.find(function (err, data) {
    if (err) throw err;
    return data;
  })
};

exports.insert = async (evt) => {
  let newEvt = new userEvent(evt);
  await newEvt.save();
}

// module.exports = Event;
