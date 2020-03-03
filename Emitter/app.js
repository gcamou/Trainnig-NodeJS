var EventEmitter = require('./eventEmitter');
var events = require('events');
var eventsConfig = require('./config').events;

var evtr = new events(); //new EventEmitter();

evtr.on(eventsConfig.MESSAGE, function () {
    console.log("this is a message number one");
});

evtr.on(eventsConfig.MESSAGE, function () {
    console.log("This is a message number two");
})

console.log("this is a random message");

evtr.emit(eventsConfig.MESSAGE);
