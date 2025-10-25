// an empty container
let arrayBuffer = new ArrayBuffer(5);

// a buffer to view the content of arrayBuffer
const b1 = Buffer.from(arrayBuffer, 0, 5);
b1[0] = 67

const b2 = Buffer.from("hello\n");

console.log(arrayBuffer);
console.log(b1);
console.log(b2);
console.log(b2.toString());

/*
ArrayBuffer { [Uint8Contents]: <43 00 00 00 00>, byteLength: 5 }
<Buffer 43 00 00 00 00>
<Buffer 68 65 6c 6c 6f 0a>
        h  e  l  l  o  \n
*/