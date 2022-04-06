const { doesNotMatch } = require('assert');

const EventEmitter = require('events').EventEmitter;

let i = 0;
function complexOps() {
    const events = new EventEmitter();

    // event will be emitted when listener is ready
    events.emit('first success', i++); // 0
    process.nextTick(function callback(e) {
        if(e) throw e;
        events.emit('success', 'next tick success' + i++); // 2

    }, /* Error('l') */); // if an arg is specified it will be used in callback
    // console.log('i is', i); // 1
    events.emit('success', 'clossing success' + i++); // 1
    return events;
}

complexOps().on('success', function(v) {
    //console.log('success was emitted:', v)
})

process.nextTick(() => console.log('next tick 1'));
process.nextTick(() => console.log('next tick 2'));
console.log('t')
setTimeout(() => console.log('timedout'), 0);
setImmediate(() => console.log('immediately'))
const interv = setInterval(() => console.log('interval'), 1000)
// interv.unref();
console.log('interv', interv)
// clearInterval(interv)
for(let [idx, el] of Array(10).entries()) {
    process.nextTick(()=> console.log('idx is', idx))
}