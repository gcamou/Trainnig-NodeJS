var express = require('express');
var mongoose = require('mongoose');

var config = require('./config');
var seederController = require('./controllers/seederController');
var personController = require('./controllers/personController');

var app = express();

var port = process.env.PORT || 3000

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

mongoose.connect(config.getConnectionString(), {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    });

seederController(app);
personController(app);

app.listen(port);