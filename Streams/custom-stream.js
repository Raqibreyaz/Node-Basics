import { Readable, Writable } from "stream";

const readableStream = new Readable({
  // specifies a threshold value assumed to be safe to push the amount of data
  highWaterMark: 2,
  read() {},
});

// readableStream.on("data", (chunk) => {
//   console.log(chunk.toString());
// });

// returns true when data passed < highWaterMark length else false
// console.log(readableStream.push("hello bhailog"));

const writableStream = new Writable({
  write(chunk) {
    console.log(chunk.toString());
  },
});

// when some chunk of data read, then write to stream
readableStream.on("data", (chunk) => {
  writableStream.write(chunk);
});

readableStream.push("hello bhailog");
