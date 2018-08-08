//There are 7 data types
// Boolean
var data = true;
if (data) {
    console.log("Booleans rule!");
} else {
    console.log("Booleans are Lame");
}
// Null means no value
var n = null;
console(n * 32);

// Undefined 
var a;
console.log(a + 2);

// Number
var num = 3.6;
var ber = 6.4;
console.log(num + ber);

// String. "Howdy" 
var name = "Beau";
console.log("Hi! My name is " + name);

// Symbols Although different vars can have different values they are not the same variable
var sym1 = Symbol("foo");
var sym2 = Symbol("foo");
console.log(sym1 === sym2);
console.log(String(sym1) === String(sym2));

// Object
var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
console.log(myCar.make);