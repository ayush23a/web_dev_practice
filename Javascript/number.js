const score = 400
// console.log(typeof score);

const balance = new Number(100)
// console.log(balance.toString());
console.log(typeof balance.toString()); // returns string as converted into string
// console.log(typeof balance); // still an obj type 

const leadScore = 123.765
console.log(leadScore.toFixed(2)); // returns with round-off to 2 digits only 
console.log(leadScore.toPrecision(3)); // returns precise value upto mentioned digits
// console.log(leadScore.toExponential());

const value = 100000023
console.log(value.toLocaleString("en-IN")); // returns the number in local lang by putting commas
//  en-ID means english-India
// by default it is en-US

// Number ->  built-in-object wrapper, not datatype
console.log(Number.MIN_SAFE_INTEGER);
// has static methods like MAX_VALUE, MIN_VALUE, EPSILON, etc. 
// returns type object not number

// refer mdn docs for more


// -------Math--------

// console.log(Math.round(4.56)); // round off to nearest possible num
// console.log(Math.abs(-5)); // absoulte value
console.log(Math.random()); // random num bet 0 & 1
// console.log(Math.min(3, 5,4,2,6));
// console.log(Math.max(4,3,5,2,6));


console.log((Math.random()* 10) + 1); // now values bet 1 & 9

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min)); // always greater than required min value

// max - min : to get the range for generating random val
// +1 : to avoid 0 case
// + min : to get the random val above the req min 






