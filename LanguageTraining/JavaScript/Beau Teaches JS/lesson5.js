/* Strings: [Bracket Notation] */
var firstName = "Francisco";
console.log(firstName[0]);
console.log(firstName[firstName.length - 2]);
firstName[0] = "Q"; /* This doens't work */
firstName = "Quincy"; /* This only replaced the val on var */
console.log(firstName);