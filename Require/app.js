var car = require('./car');

car.nissan();
car.ford();

var sgltr = require('./ctor/sgltr');
sgltr.Get();

var sgltr2 = require('./ctor/sgltr');
sgltr2.brand = "Ford2";

sgltr2.Get();

var Newcrtr = require('./ctor/newcrtr');
crtr = new Newcrtr();
crtr.Get();

crtr.brand = "This brand doesnt exist !!!";

var Newcrtr2 = require('./ctor/newcrtr');
crtr2 = new Newcrtr2();
crtr2.Get();

crtr.Get();

var revealingtr = require('./revealing').Get;
revealingtr();


