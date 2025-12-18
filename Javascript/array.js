// Array
const myArr = [0,1,2,3,4]
const studs = ["ayush", "aman", "shivam", "raj"]

const balance = new Array(2,3,5,4,6)  //using object method and constructor

console.log(myArr[1]);
// console.log(typeof balance); // returns object

// Array methods

// myArr.push(7) // inserts element at the end of array
// myArr.push(5)
// myArr.pop() // removes the last element
// console.log(myArr); 

// myArr.unshift(8) // inserts element at the start of the array
// myArr.shift() // removes first element from array

// myArr.shift()
console.log(myArr);

// console.log(myArr.includes(7)); // returns bool


console.log(myArr.indexOf(4));


// join : copy array into another variable and convert it into string

const Arr1 = myArr.join()
// console.log(myArr);
// console.log( Arr1); // return type string


// slice and Splice 

const temp1 = myArr.slice(1,3) // just change the copy of teh array not teh actual array
console.log("A", myArr);
console.log(temp1);

const temp2 = myArr.slice(1,4)
console.log("B", myArr);
console.log(temp2);

const temp3 = myArr.splice(1,3) // changes the actual array permanently
console.log("C", myArr);
console.log(temp3);









