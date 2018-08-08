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
// doSometyhingElse();
function doSomethingElse(params) {
    console.log('I did it!');
}

// functionVar(); // Uncaught TypeError: functionVar is not a function
var functionVar = function () {
    console.log('I did it!');
}