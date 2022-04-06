console.log('hey there');

// prevent node from exiting right away
process.stdin.resume();

// test with: kill -1 10599
// Or kill -s SIGHUP 10599
process.on('SIGHUP', function onSigHup() {
    console.log('Reloading conf');
    process.kill(process.pid, 'SIGINT') // async
    console.log('pid is', process.pid)
})

process.on('SIGINT', function onSigInt() {
    // test with: kill -s SIGINT 10321
    console.log('someone interrupted but we still on');
});

// wont work
// process.on('SIGKILL', function onSigKill() {
//     console.log('killing')
// })
// pid for you to test with
// sample SIGHUP command on unix: kill -s SIGHUP 9708
console.log('pid:', process.pid);
