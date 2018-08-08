// JS Nuggets: == vs ===

// == abstract equality, will attempt to resolve the data types via type conversion before making a comparison

// === strict equality, will return false if the types are different

console.log(3 == "3"); // true
console.log(3 === "3"); // false
console.log(true == '1'); // true
console.log(true === '1'); // false

console.log("This is a string." == new String("This is a stringt.")); //true
console.log("This is a string." === new String("This is a stringt.")); //false