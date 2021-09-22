//Modules 

//you split your code into modules
const names = require('./names.js');
const sayHi = require('./utils');

require('./mind-grenade');

sayHi('ron');
sayHi('sebas');
sayHi(names.peter);
sayHi(names.newnew);