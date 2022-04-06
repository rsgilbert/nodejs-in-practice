const { Buffer } = require('buffer');
// let buf = new Buffer(10);

// allocate bytes and create a new buffer
// Each position is 1 byte 

let buf = Buffer.alloc(2, 8);
console.log(buf);

buf[0] = 255;
buf[1] = 10;
console.log(buf);


