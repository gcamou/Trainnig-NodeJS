var bodyparser = require('body-parser');

var urlencodingParser = bodyparser.urlencoded({ extended: false });

module.exports = (app) => {
    app.post('/api/employee', urlencodingParser, (req, res) => {
        res.render('employee', { firstname: req.body.firstname, lastname: req.body.lastname });
    });
}