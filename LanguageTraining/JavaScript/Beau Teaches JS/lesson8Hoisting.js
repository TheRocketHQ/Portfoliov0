// JS Nuggets
// Hoisting

// console.log(notDeclared); // Uncaught ReferenceError: notDeclared is not defined

// console.log(definedLater);
var definedLater;
definedLater = 'I am defined!'
// console.log(definedLater);

// console.log(definedSimulateneously)
console.log(definedSimulateneously);
var definedSimulateneously = 'I am defined!'
// console.log(definedSimulateneously);

// doSometyhingElse(); //to the top
function doSomethingElse(params) {
    console.log('I did it!');
}

// functionVar(); // Uncaught TypeError: functionVar is not a function
var functionVar = function () {
    console.log('I did it!');
}

/* To make your functions easier to read you should declare your vars at the top of your function scope so it's clear which variable are the functions coming from */