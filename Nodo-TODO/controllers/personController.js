var bodyParser = require('body-parser');

var person = require('../models/personModel');

module.exports = (app) => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/persons/:firstName', (req, res) => {
        person.find({ firstName: req.params.firstName },
            (err, people) => {
                if (err) throw err;

                res.send(people);

            });
    });

    app.get('/api/person/:id', (req, res) => {
        person.findById({ _id: req.params.id },
            (err, person) => {
                if (err) throw err;

                res.send(person);
            });
    });

    app.post('/api/person', (req, res) => {
        var newPerson = person({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthDay: req.body.birthDay,
            isActive: req.body.isActive
        });

        newPerson.save((err) => {
            if (err) throw err;

            res.send('Success');
        });
    });

    app.put('/api/person', (req, res) => {
        person.findByIdAndUpdate(req.body.id,
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                birthDay: req.body.birthDay,
                isActive: req.body.isActive
            },
            (err) => {
                if (err) throw err;

                res.send('Success');
            });
    });

    app.delete('/api/person', (req, res) => {
        person.findByIdAndDelete(req.body.id,
            (err) => {
                if (err) throw err;

                res.send('Sucess');
            });
    });

}