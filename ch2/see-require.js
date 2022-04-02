// console.log(require.resolve('./a.js')) // shows full path
// console.log(require.resolve('./readme.md'))

const { speak } = require('./a.js')

speak()

// unload module - removes a module from cache
// console.log(require.cache)
console.log(Object.keys(require.cache))

delete require.cache[require.resolve('./a.js')]
speak();
require('./a.js').speak()
console.log(Object.keys(require.cache))


// you can get filename being executed using cmd node fname.js by using:
// const currFileName = Object.keys(require.cache)[0]
// console.log(currFileName)