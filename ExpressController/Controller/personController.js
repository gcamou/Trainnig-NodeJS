module.exports = (app) => {    
    app.get('/api/person', (req, res) => {
        res.render('person');
    });
}