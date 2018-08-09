// it has been declared but has still not gotten any value

// JS Nuggets: Null vs Undefined

var test
console.log(test) // undefined

test = null
console.log(test) // null
console.log(typeof null) // "Object"
console.log(typeof undefined) // "undefined"
console.log(null === undefined) // false
console.log(null == undefined) // true
console.log(null === null) // true
console.log(null == null) // true
console.log(!null) // true
console.log(!!null) // false
console.log(1 + null) // 1 
console.log(1 + undefined) // NaN