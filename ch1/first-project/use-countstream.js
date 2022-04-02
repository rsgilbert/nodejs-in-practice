const CountStream = require('./countstream.js')
const http = require('http')

const countStream = new CountStream('div');
countStream.on('total', function(count) {
    console.log('count is', count)
})

http.get('http://www.google.com', function(res) {
    console.log(res.statusCode, res.statusMessage);
    // res.on('data', function (d) {
    //     console.log('data\n\n\n\n', d.toString())
    // }

    res.pipe(countStream);

})

