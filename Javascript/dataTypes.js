let age = 18
let name = "ayush"
let isLoggedIn = true
let State;

// different data types
// number => max upto 2^53
// bigint => for larger nombers
// boolean => true/false
// string => ""
// null => standalone value
// undefined => which is not defined
// symbol => to identify uniqueness (mostly used in frameworks like react, vue etc)
// object


console.log(typeof isLoggedIn);
console.log(typeof undefined); // type -> undefined
console.log(typeof null); // type -> object


// read MDN docs and ECMA standards for more refs 

// ---------//------//-------- //

// Conversion Operations

let score = "aysuh"

//console.log(typeof score);

let valueInNumber = Number(score) //typecasting
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

let isChecked = 1

//console.log(typeof isChecked);

booleanIsChecked = Boolean(isChecked)
// console.log(typeof booleanIsChecked);
// console.log(booleanIsChecked);

let some = 33
let stringSome = String(some)

console.log(stringSome); // 33
console.log(typeof stringSome); // string




// NaN -> type is number in js but it dont stores a num
// true -> 1; false -> 0
// if boolean variable has true , "true", "anything", 1 => returns boolean type true
// if bool variable has false, "" , 0 => returns boolean type false

// ------Operations-------

//normal arithmetic opr (+, -, *, **, /, %)

console.log(1 + "2");
console.log("1" + 2);
console.log("1" + 2 + 2); // primitive precedence for string
console.log(1 + 2 + "2"); 

// for string if string comes first then all will be concateneted as string
// if num comes first then first opr takes then comcatenate


let gameCounter = 100
gameCounter++
console.log(gameCounter);

