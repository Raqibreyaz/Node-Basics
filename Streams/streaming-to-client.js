import http from "http";
import fs from "fs";
import { pipeline, Transform } from "stream";

// req, is a readable stream
// res is a writeable stream
const server = http.createServer((req, res) => {
  if (req.url !== "/") return res.end();

  const readStream = fs.createReadStream("sample.txt");
  const writeStream = fs.createWriteStream("Streams/output.txt");

  // manipulating the chunk received
  //   readStream.on("data", (chunk) => {
  //     const finalString = chunk
  //       .toString()
  //       .replaceAll(/ipsum/gi, "cool")
  //       .toUpperCase();

  //     writeStream.write(finalString);
  //   });

  //   transform makes manipulation a lot easier
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const finalString = chunk
        .toString()
        .replaceAll(/ipsum/gi, "cool")
        .toUpperCase();

      callback(null, finalString);
    },
  });

  // a pipeline where data will be passed after transformation
  //  problem is assigning error even handler each time is redundant
  //   readStream
  //     .pipe(transformStream)
  //     .on("error", (error) => {
  //       console.error(error);
  //     })
  //     .pipe(writeStream)
  //     .on("error", (error) => {
  //       console.error(error);
  //     });

  pipeline(transformStream, writeStream, (error) => {
    if (error) console.log("Error occured: ", error);
  });

  // stream the file into the response
  // readStream.pipe(res);

  res.end();
});

const port = process.env.PORT ?? 3000;

server.listen(port, () => console.log(`Server is Listening on ${port}`));
