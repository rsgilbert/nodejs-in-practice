let args  = {
    '-h' : displayHelp,
    '-r': readFile
}

function displayHelp() {
    console.log('Argument processor:', args)
}

function readFile(file) {
    if(file && file.length) {
        console.log('Reading', file);
        console.time('read');
        const stream = require('fs').createReadStream(file);
        stream.on('end', function() {
            console.timeEnd('read');
        })
        stream.pipe(process.stdout);
    }
    else {
        console.error('Provide file using -r');
        process.exit(1);
    }
}

if(process.argv.length > 0) {
    // console.log(process.argv)
    process.argv.forEach(function (arg, index) {
        // argv's after arg are used as parameters to the function
        args[arg]?.apply(this, process.argv.slice(index + 1))
    })
}


