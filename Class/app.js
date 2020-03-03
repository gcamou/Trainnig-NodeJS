class Person{
    constructor(firsname, lastname){
        this.firsname = firsname;
        this.lastname = lastname;
    }

    getname(){
        console.log('this is a full name: ', this.firsname, ' ', this.lastname);
    }
}

var person1 = new Person('Tim', 'Roberts');
var person2 = new Person('Sophia', 'Reynolds')

person1.getname();
person2.getname();