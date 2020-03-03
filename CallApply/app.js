var obj = {
    text: 'object text',
    doSomething: function () {
        return `This is ${ this.text }.`;
    }
}

console.log(obj.doSomething());
console.log(obj.doSomething.call({ text: 'text from call method' }));
console.log(obj.doSomething.apply({ text: 'text from apply method' }));