// MODULES - Encapuslated code ( only share minimum )
// CommonJS , every file in node is a module (by default)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alter-flavor')
require('./7-mind-nade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)