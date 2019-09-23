"use strict";

/*

loadModule: Function mimics a subset functionality of the require() function of Node.js

*/
function loadModule(fileName, module, require) {
  const wrappedSrc = `(function(module,exports,require){
        ${fs.readFileSync(fileName, "utf8")}
    })(module,module.exports,require)`;
  eval(wrappedSrc); // evaluates the string as an expression
}
