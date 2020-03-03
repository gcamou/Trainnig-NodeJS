function Person() {
    this.firstName = 'Robert';
    this.lastName = 'Jones';
}

Person.prototype.getName = function () {
    return this.firstName + ' ' + this.lastName;
}

module.exports = Person;