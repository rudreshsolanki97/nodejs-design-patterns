"use strict";

// Create Dynamic Methods & call them
let dynamicMethods = []; // object
dynamicMethods["printDate"] = function () {
  console.log(new Date());
};
dynamicMethods["printTimestamp"] = function () {
  console.log(Date.now());
};
Object.keys(dynamicMethods).forEach(x => {
  dynamicMethods[x]();
});

// understanding closures: functions & their lexical environment binded together

// all the inner functions will retain all the lexical environments all the way through
function adderfactory(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}

let adder5 = adderfactory(5);
let adder5_9 = adder5(9);
console.log(adder5_9(10))

