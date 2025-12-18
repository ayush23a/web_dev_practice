// Array
const myArr = [0,1,2,3,4]
const studs = ["ayush", "aman", "shivam", "raj"]

const balance = new Array(2,3,5,4,6)  //using object method and constructor

// console.log(myArr[1]);
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


// console.log(myArr.indexOf(4));


// join : copy array into another variable and convert it into string

const Arr1 = myArr.join()
// console.log(myArr);
// console.log( Arr1); // return type string


// slice and Splice 

const temp1 = myArr.slice(1,3) // doest not manipulate the original array
// console.log("A", myArr);
// console.log(temp1);

const temp2 = myArr.slice(1,4)
// console.log("B", myArr);
// console.log(temp2);

const temp3 = myArr.splice(1,3) // changes the original array permanently
// console.log("C", myArr);
// console.log(temp3);


// ------more topics ----
// ======= push and concat =====
const studs2 = ["pankaj", "cap", "tony"]
// studs.push(studs2) // merges arrays making the new array a completely new element in the actual array
// console.log(studs);

const final_array = studs.concat(studs2) // returns a completely new array by combining both the arrays
// console.log(final_array);


// ====== spread and flat =====

let arr = [1, 2, 3, [4, 5, 6], 7, [6, 9, [4, 3, 6]]]
console.log(arr.flat(Infinity)); // returns all the nested elements of array inside the main array
// needs depth upto which it should concatenate the elements
// use infinity as it auto figures the req depth



// spread (...)
const next_arr = [...studs, ...studs2] // expands arrays into different elements
console.log(next_arr);

// concat vs spread
// prefer spread over concat as we can add many arrays to be spreaded or concatenated
// much easily than on concat (just add ...<arr_name>)
// much realistic and user friendly


// ---more opr---
// console.log(Array.isArray("ayush")) // returns bool 
console.log(Array.from("ayush")) // cpnverts into array of elements of chars
console.log(Array.from({ name : "ayush"})); // interesting case 
// while using objects we have to specify which property (key/ value) has to be converted to array


let score1 = 100
let score2 = [1,2,3,4]
let score3 = 300
let score4 = "hello"
console.log(Array.of(score1, score2, score3, score4)) // returns a new array from a set of elements

// spread cant be used in here to convert these into array
// score1 and score3 is not iterable so spread cant expand these

let grp_arr = [...score2, ...score4] // this worked as score2 & score4 is iterable
console.log(grp_arr);

















