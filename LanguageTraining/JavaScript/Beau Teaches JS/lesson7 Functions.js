/* Functions */
// Javascript Procedure to resolve and get a value

function square(number) {
    return number * number;
}

console.log(square(4)); //16

// Global Variable Example
var someVar = "Hat";

function myFun() {
    console.log(someVar);
}

// Local has Precedence over Global Variable Example
var someVar = "Hat";

function myFun() {
    var someVar = "Shoes";
    console.log(someVar);
}

myFun(); // "Shoes"
console.log(someVar); //

// Example of function hoisting
console.log(addSquare(1, 3)); /* To say that a function is hoisted is to say that the location where we write our function does not matter since it goes to the top of the whole function itself */

/* Nesting */
function addSquare(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}

a = addSquare(2, 3); // return 13
b = addSquare(3, 4); // returns 25
c = addSquare(4, 5); // returns 41