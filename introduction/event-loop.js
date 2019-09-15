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

let i = 0;
while (i < 1000000000) {
  i++;
}
