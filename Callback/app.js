function doSomething(callback){
    console.log('This is a first message');

    var data = {
        name: 'Jonny Cage'
    };

    callback(data);
}

doSomething((data) => {
    console.log('This is a callback message call');
    console.log(data);
});

doSomething((data) => {
    console.log('This is a new callback message call');
    console.log(data.name);
});