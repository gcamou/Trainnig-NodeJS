var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

var people = [
    {
        name: "Jon Doe"
    },
    {
        name: "Jessy Doe"
    },
    {
        name: "Josh Doe"
    }
];


app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index', { serverPeople: people });
});

app.listen(port);