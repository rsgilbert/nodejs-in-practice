const Writable = require('stream').Writable;
const util = require('util')


module.exports = CountStream;

// ***

util.inherits(CountStream, Writable);

function CountStream(matchText, options) {
    // constructor
    Writable.call(this, options);
    this.count = 0;
    this.matcher = new RegExp(matchText, 'ig');
}

CountStream.prototype._write = function(chunk, encoding, cb) {
    // count matches
    const matchList = chunk.toString().match(this.matcher);
    if(matchList) {
        this.count += matchList.length;
    }
    console.log('writing', matchList)
    cb();
}

CountStream.prototype.end = function(){ 
    // publish total no of matches
    this.emit('total', this.count);
}
