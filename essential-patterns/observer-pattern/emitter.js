const Emitter = require("events").EventEmitter;
const eeInstance = new Emitter();

eeInstance.on("songs", (...args) => {
  process.nextTick(() => {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    console.log("Match word: songs found");
  });
});

exports.emitter = eeInstance;
