var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

    res.writeHead('200', { 'Content-Type': 'text/plain' });
    res.end('Hello world!!!!\n');

}).listen('1335', 'localhost');

http.createServer((req, res) => {
    res.writeHead('200', { 'Content-Type': 'text/html' });
    var html = fs.readFileSync(__dirname + '/index.htm');
    res.end(html);
}).listen('1336', 'localhost');

http.createServer((req, res) => {
    res.writeHead('200', { 'Content-Type': 'text/html' });

    var html = fs.readFileSync(__dirname + '/index.js', 'utf8');
    var message = 'Hello World!!!';
    html = html.replace('{message}', message);
    res.end(html);
}).listen('1337', 'localhost');

http.createServer((req, res) => {

    res.writeHead('200', { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/index.htm').pipe(res);

}).listen('1338', 'localhost');

http.createServer((req, res) => {

    res.writeHead('200', { 'Content-Type': 'application/json' });
    var obj = {
        firstName: 'Jessy',
        lastName: 'James'
    };

    res.end(JSON.stringify(obj));

}).listen('1339', 'localhost');

http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead('200', { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.htm').pipe(res);
    } else if (req.url == '/api') {
        res.writeHead('200', { 'Content-Type': 'application/json' });

        var obj = {
            firstName: 'Mark',
            lastName: 'Schnaider'
        };

        res.end(JSON.stringify(obj));
    } else {

        res.writeHead(404);
        res.end();
    }
}).listen('1340', 'localhost');