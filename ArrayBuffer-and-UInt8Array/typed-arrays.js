/*
- Typed arrays don’t store generic values like normal arrays; instead, they store values of a fixed numeric type (for example, 8‑bit, 16‑bit, or 32‑bit integers and floats)
- All typed arrays are “views” over an ArrayBuffer, meaning they interpret the same memory in different ways.​
- You could use a single ArrayBuffer to represent both a Uint16Array and a Float32Array — each interpreting the same bytes differently.
*/


const int8 = new Int8Array([127, -128, 0]);   // signed 8‑bit integers
const uint8 = new Uint8Array([0, 255]);       // unsigned 8‑bit integers
const float32 = new Float32Array([3.14, -2]); // 32‑bit floats

import { Buffer } from "node:buffer";

const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
const u_int8 = new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
const text = Buffer.from(u_int8);

console.log(buf)
console.log(u_int8)
console.log(text.toString("utf-8"));

/*
<Buffer 62 75 66 66 65 72>
Uint8Array(6) [ 98, 117, 102, 102, 101, 114 ]
buffer
*/
