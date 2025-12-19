// two types of objects : singleton and literals
// singleton : defined usign constructors
// literals: normal definition

const { use } = require("react");


// literals
const mySym = Symbol("key1")

const JSuser = {
    name : "ayush",
    location : "Kolkata",
    email : "ayush23@hotmail.com",
    repoCount: 27,
    isLogged : true,
    loggedInDays : ["Mon", "Tue", "Thur"],
    [mySym] : "myKey1" // Symbol declaration like this in obj

}

// console.log(JSuser.name);
// console.log(JSuser.location); // 1st method of accessing stirng key
// console.log(JSuser["email"]); // 2nd method of accessing string type key (most preffered)
// // console.log(typeof JSuser.mySym); // return type string != Symbol
// console.log(JSuser[mySym]); // correct access like this


// to change any value in obj
JSuser.email = "amanayush@yahoo.com"
// console.log(JSuser);

// -- freeze -- 
// to lock the object and prevent it from editing

// Object.freeze(JSuser)

// JSuser.email = "aman@google.com" // did not parse inside obj -> no change
// console.log(JSuser);


JSuser.greeting = function(){
    console.log("Hello user!!");
    
}

JSuser.greeting2 = function(){
    console.log(`Hello ${this.name}!! happy coding :)`);
    console.log(`Hello user, your email is ${this.email}`);
    
}

// "this" keyword is used to access the itmes from the object

console.log(JSuser.greeting());
console.log(JSuser.greeting2());

// ===================================================
// Singleton Objects

// const user = new Object() // singleton definition

const user = {} // non singleton def

user.name = "aman"
user.email = 'asdf@jhg.com'
user.isLoggedIn = false

console.log(user);












