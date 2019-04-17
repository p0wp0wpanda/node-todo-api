var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27019/ToDoApp');

module.exports = {mongoose}