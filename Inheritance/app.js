var EventEmitter = require('events');
var util = require('util');

function Cartr(){
    this.brand = 'This is a Ford'
}

util.inherits(Cartr, EventEmitter);

Cartr.prototype.get = function (arg) {
    console.log(this.brand, arg);
    this.emit('get', arg);
}

var car1 = new Cartr();

car1.on('get', function (arg) {
    console.log('This is inheret message. ' + arg);
})

car1.get('[this is a argument]');