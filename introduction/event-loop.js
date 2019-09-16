"use strict";

// Drilling the logic of Event Loop.
// Reference document: https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/

let numberArr = [1, 2, 3, 4];

// synchronous
numberArr.forEach(i => {
  console.log(i);
});

// asynchronous
function asyncForEach(arr, cb) {
  arr.forEach(i => {
    setTimeout(cb, 0, i);
  });
}

process.nextTick(() => asyncForEach(numberArr, cb));

let cb = function(a) {
  console.log("cb: ", a);
};

// blocking heavy call
let i = 0;
while (i < 1000000000) {
  i++;
}

process.nextTick(() => console.log("Next Tick")); // more immediate than setImmediate
setImmediate(() => console.log("Set immediate")); // next loop of execution; more compatible than process.nextTick()
