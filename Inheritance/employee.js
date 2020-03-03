var util = require('util');
var Person = require('./person');

function Employee(){
    Person.call(this);
    this.budgeNumber = '1234';
}

util.inherits(Employee, Person);

var emp = new Employee();

console.log('Employee name: ', emp.getName(), ' Badge Number: ', emp.budgeNumber);
