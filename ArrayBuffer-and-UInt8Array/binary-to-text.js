import fs from "fs";

// non-printable binary data
const binaryBuffer = fs.readFileSync("image.png");

// writing file as printable chars
fs.writeFileSync("image-text.txt", binaryBuffer.toString("base64"), {
  encoding: "base64",
});

// converting to hexadecimal numbers
// every byte = 2 hex chars
console.log(binaryBuffer.toString("hex"));
