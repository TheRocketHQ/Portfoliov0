/* Logical Operators && Short Circut Evaluation */
// AND: && OR: ||

if (num > 5) {
    if (num < 10) {
        console.log("Unicyle")
    }
}

// The same can be made with an additional AND &&
if (num > 5 && num < 10) {
    console.log("Unicycle")
}

// The logical || will set tp true if one of the conditions is true
if (num > 5 || num < 10) {
    console.log("Unicycle")
}

// Short circut evaluation happens when conditionals use && Or || - basically all conditions need to be set in the overall value inside the (), if not it doesn't even check the remaining conditions
var test = true;
var isTrue = function () {
    console.log('Test is true.')
};
var isFalse = function () {
    console.log('Test is false .')
};

// so this:
if (test) {
    // isTrue();
}
// can became this
(test && isTrue());

test = false;
// for || :
if (!test) {
    // isFalse();
}
// can became this
(test || isFalse()); // again we are testing the whole thing as being true

// Another use for ShortCircut is a set a default value for a function argument
function theSameOldFoo(name) {
    name = name || 'Bar'; // set's the default value for Bar
    console.log("My best friend's name is " + name);
}
theSameOldFoo(); // D3efault "Bar"
theSameOldFoo('Beau'); // Uses "Beau"