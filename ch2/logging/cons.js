// to redirect errors (and warnings) to a file for errors, use:
// node cons.js 2> e.err

let name = 'john'

let user = { name: 'Tim' };

console.log("Hello")
console.log('Hey %s, how are you?', user); // simple variable interpolation
console.log('Dear', name);
console.log('User is', user);

console.error('bad user', user)
console.log('User %s is user no %d', name, 4)
console.log('Welcome %s', user)
console.log('Users json is %j', user)  // {"name":"Tim"}

console.info('FYI'); // synonymous to console.log
console.warn('I am warning you'); // synonymous to console.error

