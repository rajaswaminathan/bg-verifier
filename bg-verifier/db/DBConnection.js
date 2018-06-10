var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bg-verifier');

var db = mongoose.connect;

module.exports = db;