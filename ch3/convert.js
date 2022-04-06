// let b = new Buffer('potato')
let b = Buffer.from('yellow')
console.log(b);

// convert buffer into string
let base64Str = b.toString('base64');
console.log(base64Str)

let b2 = Buffer('ij');
console.log(b2)