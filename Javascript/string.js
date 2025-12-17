const name = "ayush"
const LastName = "aman"
const repCount = 28

// console.log(name + LastName + repCount + " value"); // old method ## never use this

// use this
// String Interpolation method
console.log(`Hey there!! my full name is ${name} ${LastName} and the total repo count is ${repCount}`);


const NewUser = new String("Manyaa")


//console.log(NewUser.__proto__); // use to see the prototypes or functions inside this; works on browser perfectly
// console.log(NewUser.toUpperCase());
// console.log(NewUser.length); // gives length
// console.log(NewUser.charAt(3)); // find the char present at any position
// console.log(NewUser.indexOf('n')); // find the index of any char

console.log(NewUser.lastIndexOf('a')); // returns the last occurence of a substring

// console.log(name.substring(0,4));
// console.log(name.slice(-6,4)); // -ve indices allowed 

const newName = "    ayush world    "
console.log(newName);
console.log(newName.trim()); // removes extra white spaces from the start & end of string

const url = "https://www.ayush&23aman.vercel.com"

console.log(url.replace("&23", "-")); // replace any literal with the new provided

console.log(url.includes('pankaj')); // return type: bool; check whether a substring is present or not


var getName = name
getName = "ayush-yes-new"
console.log(getName.split('-'));
console.log(NewUser.split('a'));













