// setTimeout(function() {
//     console.log('hi future')
// }, 1000)

function Blast(){ 
    this.message = 'I am blast'
}

Blast.prototype.goOff = function() {
    console.log(this.message);
}

const blast = new Blast();

// blast.goOff();

// Ensure method is bound proprely by using .bind
// setTimeout(blast.goOff, 800); // bad
const timeoutId = setTimeout(blast.goOff.bind(blast), 2000)
console.log('timeout id', timeoutId);
clearTimeout(timeoutId)