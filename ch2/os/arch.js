console.log(process.arch);

switch(process.arch) {
    case 'x64': 
        console.log('is x64:', process.arch);
        break;
    case 'ia32':
        console.log('is win32', process.arch);
    default:
        console.log('Unknown arch', process.arch);
        break;
}

// memory usage statistics
console.log(process.memoryUsage())


// process.argv args
const [_, _2, ...t] = process.argv;
console.log(_);
console.log(_2);
console.log(t)
