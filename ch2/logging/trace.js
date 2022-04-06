function f1() {
    f2();
}

function f2() {
    console.log('hi f2')
    console.trace();
    console.log('after trace')
}

f1();