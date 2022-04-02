// process.stdin and process.stdout

// pipe text from another command, and output it again
///////////////////////////////////////////////////
// run with cat myfile.txt | node std.js

console.log('Ready');
process.stdin.resume(); // tell stream we are ready to start reading
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(text) {
    process.stdout.write('\n\nData:' + text.toUpperCase(), 'utf8');
    process.stdin.destroy();
});




