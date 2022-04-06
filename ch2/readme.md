# Chapter 2 - Node's environment


host objects - objects supplied by Node to help programs to execute.

We can unload a module by deleting it from require.cache


// to redirect errors (and warnings) to a file for errors, use:
// node cons.js 2> e.err
// Or: node cons.js 2>> e.err
// Redirect stdout content to its file
node cons.js 1>> info.log
// Redirect both:
node cons.js 1>> info.log 2>> e.err