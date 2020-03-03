var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', (req, res, next) => {
    console.log('Request Url: ' + req.url);
    next();
} );

app.set('view engine', 'ejs');

app.get('/assets', (req, res) => {
    res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello World !!!</h1></body></html>');
});

app.get('/template', (req, res) => {
    res.render('index');
});

app.get('/template/person/:id', (req, res) => {
    res.render('person', { ID: req.params.id, Qstr: req.query.qstr});
});

app.get('/person/:name', (req, res) => {
    res.send('<html><head></head><body><h1>Person: ' + 
    req.params.name
    + '</h1></body></html>');
});

app.get('/api', (req, res) => {
    res.json({ firsName: 'Jerry', lastName: 'Code' });
});

app.get('/postparser', (req, res) => {
    res.render('index');
});

app.post('/postparser', urlencodedParser, (req, res) => {
    res.send('This is a Post Call');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.listen(port);

