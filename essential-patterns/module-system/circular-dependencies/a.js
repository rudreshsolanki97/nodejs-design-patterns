console.log('a starting');
exports.done = false;


const b = require('./b.js');

/*

a calls b.js which in turn calls a.js, to prevent infinite loop 
an incomplete version is returned.

*/

console.log('in a, b.done = %j', b.done);
exports.done = true;
console.log('a done');