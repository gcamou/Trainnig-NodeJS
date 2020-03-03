var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    if (req.url === '/') {
        fs.createReadStream(__dirname + '/index.htm').pipe(res);
    } else if (req.url === '/api') {
        var obj = {
            firstName: 'Jerry',
            lastName: 'Code'
        };

        res.writeHead('200', { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(obj));
    } else {
        res.writeHead(404);
        res.end();
    }
}).listen(1350, 'localhost');