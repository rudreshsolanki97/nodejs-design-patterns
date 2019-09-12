"use strict";

// Create Dynamic Methods & call them
let dynamicMethods = []; // object
dynamicMethods["printDate"] = function() {
  console.log(new Date());
};
dynamicMethods["printTimestamp"] = function() {
  console.log(Date.now());
};
Object.keys(dynamicMethods).forEach(x => {
  dynamicMethods[x]();
});

// understanding closures: functions & their lexical environment binded together
