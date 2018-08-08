// Comparison Operators & If.. Else

var isFCCGreat = True;

if (isFCCGreat) {
    console.log("Free Code Camp is amazing");
} else {
    console.log("Free Code Camp is Horrible");
};

// Comparison Operators: > < <= == !=
var age = 18;
// Order is important as soon as one of this is true it stops evaluating

if (age >= 18) {
    console.log("You are a Pirate!");
} else if (age < 2) {
    console.log("You are a child");
} else if (age < 18) {
    console.log("You are a baby");
}
// One = is an assignement operator, to check if it's equal use 2 equals
if (age == 18) {
    console.log("You are eighteen.")
};