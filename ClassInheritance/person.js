var EventEmitter = require('events');

module.exports = class Person extends EventEmitter{
    constructor(){
        super();
        this.firstname = 'John';
        this.lastname = 'Miller';
    }

    getname(data){
        console.log(`this is a full name: ${this.firstname} ${this.lastname}`);
        this.emit('message', data);
    }
}