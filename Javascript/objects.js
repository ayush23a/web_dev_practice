// two types of objects : singleton and literals
// singleton : defined usign constructors
// literals: normal definition


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

// console.log(user);

// similar to arrays , we can create nested objects also

const regularUser = {
    id : "123hjds",
    name : {
        fullName : {
            firstName : "aysuh",  // nested objects
            lastName : "aman"
        }
    },
    hasApplied : true,
    email : "hgcvdycgv@gmail.com"

}

// console.log(regularUser.name.fullName.lastName); 

const obj1 = { 1: "a", 2 : "b"}
const obj2 = { 3: "a", 4 : "b"}
const obj3 = { 5: "a", 6 : "b"}

// const obj4 = {obj1, obj2, obj3} // returns nested objects by treating each obj as an element

/*
{
  obj1: { '1': 'a', '2': 'b' },
  obj2: { '3': 'a', '4': 'b' },
  obj3: { '5': 'a', '6': 'b' }
}
*/


// to concatenate diff obj into one
// const obj4 = Object.assign({}, obj1, obj2, obj3) 

const obj4 = {...obj1, ...obj2, ...obj3} // spread method { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

/*
Object.assign(target, source)
so generally we prefer to use {} as the target and diff objs to be concatenated as the sources
in prod grade programming
so Object.assign({}, obj1, obj2, obj3) 
-> {}: target
-> obj1, obj2, obj3 : sources
*/


const emp = [
    personalDetails = {
        name : "ayush",
        email : "aman@237hsh.com",
    },
    isLoggedIn = false, 
]


console.log(emp[0].name);  // using index identufy the object and then using (.) call the properties
// console.log(emp.map()); 

console.log(Object.keys(user)); // returns array of all the keys
console.log(Object.values(user)); // array of all the values only
console.log(Object.entries(user)); // array of key - value pair

// to check if a property is present in the object or not
console.log(user.hasOwnProperty("isLogged")); // returns bool














