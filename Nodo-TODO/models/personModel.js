var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstName: String,
    lastName: String,
    birthDay: Date,
    isActive: Boolean
});

var person = mongoose.model('Person', personSchema);

module.exports = person;