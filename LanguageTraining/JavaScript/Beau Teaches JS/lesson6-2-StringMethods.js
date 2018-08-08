/* 20 Sting Methods */

var stringOne = "freeCodeCamp is the best place to learn"
var stringTwo = "frontend and backend Development"

// charAt() - Retrieves the character at the position specified
console.log(stringOne.charAt(1))

// charCodeAt() - gets code of char at specified index
console.log(stringOne.charCodeAt(1))

// Concat() - Joins two or more strings and returns a new concatenated string
console.log(stringOne.concat(stringTwo))

// endsWith() - Checks finish and returns boolean value
console.log(stringOne.endsWith("to"))

// fromCharCode() - converts charCode to the the char value at specified index
console.log(String.fromCharCode(114)) // "r" 

// includes() - checks wether it has the specified string of character
console.log(stringTwo.includes("end")) // "True"

// indexOf() - returns the position of the first found occurence
console.log(stringTwo.indexOf("end")) // 5 - 5th position of frontEnd

// lastIndexOf() - returns the last position of the last occurrence value
console.log(stringTwo.lastIndexOf("end")) // 17 

// match() - Is going to look for a match against a regex expression
console.log(stringTwo.match(/end/g))

// repeat() - repeats the specified string 3 times
console.log(stringOne.repeat(3))

// replace() - looks for the string and creates a new string where the old string was
console.log(stringTwo.replace(/n/g, "END"))

// search() - going to search for a position of the value and return a position 
console.log(stringTwo.search("end")) // 5

// slice() - is going to extract a string a return a new string
console.log(stringTwo.slice(2, 4)) // get's the word on from frontend since position 2 and 4 are specified

// split() - is going to split a string to a subarray of strings
console.log(stringOne(" ")) // going to split on a space

// startsWith() - returns a bool
console.log(stringOne.startsWith("free"))

// substr() - it's kinda like slice but includes the number of chars wanted from that place 
console.log(stringTwo.substr(2, 4)) // "onte"

// subString() - very similar to slice but, starts from 4 and presents the remanding after 2
console.log(stringTwo.substring(2, 4)) // "on"

// toLowerCase() - duh

// toUpperCase() - duh

// trim() - removes white spaces
var stringThree = "        Subscribe now!   "
console.log(stringThree.trim())