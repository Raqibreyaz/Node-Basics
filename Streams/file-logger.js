import fs from "fs";

const readStream = fs.createReadStream("sample.txt");

// stream this file to terminal
readStream.pipe(process.stdout);
