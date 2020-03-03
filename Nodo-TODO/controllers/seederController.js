var person = require('../models/personModel');

module.exports = (app) => {

    app.get('/api/seeder', (req, res) => {
        var people = [
            {
                "firstName": "Lidia",
                "lastName": "Mckenzie",
                "birthDay": "Fri Dec 23 1988 00:32:08 GMT+0000 (UTC)",
                "isActive": false
            },
            {
                "firstName": "Marcie",
                "lastName": "Hardin",
                "birthDay": "Sun Jun 27 1993 04:29:26 GMT+0000 (UTC)",
                "isActive": false
            },
            {
                "firstName": "Beck",
                "lastName": "Carroll",
                "birthDay": "Sat Feb 11 1984 14:05:09 GMT+0000 (UTC)",
                "isActive": true
            },
            {
                "firstName": "Salas",
                "lastName": "Quinn",
                "birthDay": "Wed May 18 1988 13:51:00 GMT+0000 (UTC)",
                "isActive": true
            },
            {
                "firstName": "Stanton",
                "lastName": "Ashley",
                "birthDay": "Thu Feb 07 1980 23:16:59 GMT+0000 (UTC)",
                "isActive": true
            },
            {
                "firstName": "Katie",
                "lastName": "Hammond",
                "birthDay": "Fri Jan 31 1992 06:49:55 GMT+0000 (UTC)",
                "isActive": true
            },
            {
                "firstName": "Concepcion",
                "lastName": "Jenkins",
                "birthDay": "Sat Apr 30 1977 17:24:17 GMT+0000 (UTC)",
                "isActive": false
            },
            {
                "firstName": "Atkinson",
                "lastName": "Horton",
                "birthDay": "Sat Mar 22 1980 12:42:06 GMT+0000 (UTC)",
                "isActive": true
            },
            {
                "firstName": "Kimberly",
                "lastName": "Emerson",
                "birthDay": "Sun Feb 06 1972 17:00:06 GMT+0000 (UTC)",
                "isActive": true
            },
            {
                "firstName": "Elaine",
                "lastName": "Mullen",
                "birthDay": "Thu Apr 08 1971 17:16:48 GMT+0000 (UTC)",
                "isActive": true
            }
        ];
        person.create(people, (err, result) => {
            if(err) throw err;
            res.send(result);
        });
    });
    
};