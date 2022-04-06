const fs = require('fs')

fs.readFile('./readme.md', function (err, buf) {
    // console.log(Buffer.isBuffer(buf))
    // shown as a list of octets (using hex notation)
    console.log(buf)
    // convert data into a UTF-8 encoded string
    console.log(buf.toString('utf8'))
})