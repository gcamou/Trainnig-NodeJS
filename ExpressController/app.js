var express = require('express');

var employee = require('./Controller/employeeController');
var person = require('./Controller/personController');

var app = express();

var port = process.env.PORT || 3000

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

employee(app);
person(app);

app.listen(port);