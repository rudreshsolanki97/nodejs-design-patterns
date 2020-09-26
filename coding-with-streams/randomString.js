const stream = require("stream");
const Chance = require("chance");

const chance = new Chance();

class RandomStream extends stream.Readable {
  constructor(options) {
    super(options);
  }

  _read(size) {
    let chunk = chance.string();
    this.push(chunk, "utf-8");
    if (chance.bool({ likelihood: 5 })) {
      this.push(null);
    }
  }
}

const randomStream = new RandomStream();

randomStream.on("readable", () => {
  let chunk;
  while ((chunk = randomStream.read()) != null) {
    console.log("chunk received", chunk.toString());
  }
});
