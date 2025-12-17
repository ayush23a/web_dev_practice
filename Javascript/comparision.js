// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);


// console.log("2" > 1); // true (first conversion then comparision)
// console.log("02" > 1); // true "" 

// console.log(null > 0);
// console.log(null == 0); 
// console.log(null >= 0);

// equality check (==) and comparision opr works differently 
// comparision opr first converts null into num then it compares with 0
// thats why the values are diff

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// strict check ===
// check for the datatype also along with the value

console.log("2" === 2); // false ( datatype not same)


