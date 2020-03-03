var Person = require('./person');

var person = new Person();

person.on('message', function(data){
    console.log('this is a message', data);
});

person.getname('[This is a message]');