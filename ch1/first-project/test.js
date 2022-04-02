const assert = require('assert')

const CountStream = require('./countstream.js')

// <a>   // first appearance
// <a>  // second appearance anchor . The third is below
const countStream = new CountStream('<a>'); // will appear 3 times in this very file (__filename)

const fs = require('fs');
let passed = 0;

countStream.on('total', function(count) {
    assert.strictEqual(count, 3);
    passed++;
})

// create readable stream of the current file and pipe the data through CountStream
// Ouroboros
fs.createReadStream(__filename).pipe(countStream);

process.on('exit', function() {
    console.log('Assertions passed:', passed);
})
