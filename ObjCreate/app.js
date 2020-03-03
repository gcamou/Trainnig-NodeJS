var person = {
    firstName: '',
    lastName: '',
    SayHi: function () {
        console.log('This is ' + this.firstName + ' ' + this.lastName);
    }
};

var employee1 = Object.create(person);
var employee2 = Object.create(person);

employee1.firstName = 'Ruben';
employee1.lastName = 'Wolfware';

employee2.firstName = 'Nick';
employee2.lastName = 'Royers';

employee1.SayHi();
employee2.SayHi();