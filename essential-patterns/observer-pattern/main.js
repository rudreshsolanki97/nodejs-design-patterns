"use strict";
/*

    Observer pattern is complement to the Reactor pattern of the Node.js's system.
    Many oberserveers listen for a single event, instad of a single observer style in Continuation-Passing-Style.
    E.g. Event Emitter Class

*/

/*

    Callback vs EventEmitter
    Pattern: 
        Use a callback in-conjunction with an event emitter. Callback for single functionality API  
        (small surface area principle of Node.JS ) and event emitters for more granular / finer 
        reports of the events.

*/
const fs = require("fs");
const emitter = require("./emitter");
let count = 0;
let wordsLen = 0;
fs.readFile("./abc.txt", (err, data) => {
  if (err) throw err;
  const dataStr = data.toString();
  const words = dataStr.split(/[\s]+/);
  wordsLen = words.length;
  words.forEach(word => {
    console.log(`WORD: ${word}`);
    if (word === "songs") {
      emitter.emitter.emit("songs");
    }
    count++;
  });
  console.log("Total Words: ", wordsLen);
  console.log("Words parsed: ", count);
});
