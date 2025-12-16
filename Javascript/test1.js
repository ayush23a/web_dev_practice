console.log("ayush hello") // print statement

// variables typedef

const accountID = 144523
let accountName = "ayush@hotmail.com"
var accountCity = "Hyd"
accountPass = "324324"

let accountState

// accountID = 242345 -> const keywords are immutable

accountName = "aman@yahoo.com"
accountCity = "Gurugram"
accountPass = "sdf234"

/*
should not use var as it doesn't have any scope feature aval.
var keywords can be changed anytime anywhere irrespective of their use in the same function
it should not be used bcz of the issue of block scpoing and functional scoping
*/

console.log(accountID);

//table method is used to print multiple values in the form of a table
console.table([accountID, accountName, accountCity, accountPass, accountState]);
// here accountState has not been defined (just initialised) so its type -> undefined
