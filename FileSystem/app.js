var fs = require('fs');

var message = fs.readFileSync(__dirname + '/demo.txt', 'utf8');

console.log(message);

var message2 = fs.readFile(__dirname + '/demo.txt', 'utf8', 
(err, data) => {
    console.log(data);
});

console.log('Done!');