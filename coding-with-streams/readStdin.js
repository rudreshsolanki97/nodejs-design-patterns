/**
 *
 *
 * Non Flowing mode - pulled from internal buffer, synchronous, data pulled from read
 * Streams2
 *
 */

// process.stdin
//   .on("readable", () => {
//     let chunk;

//     while ((chunk = process.stdin.read()) !== null) {
//       console.log(`CHunk read: ${chunk.length} "${chunk.toString()}"`);
//     }
//   })
//   .on("end", () => process.stdout.write("End of stream"));

/**
 *
 *
 * Streams1, old method
 *
 *
 */

process.stdin
  .on("data", (data) => {
    console.log(`New Data ${data}`);
  })
  .on("end", () => process.stdout.write("end of stream"));
