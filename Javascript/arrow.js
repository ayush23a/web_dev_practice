const user = {
    username: "ayush",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the channel`);
        console.log(this);
        // this keyword inside any obj reffers to the current context of the obj
        
    }
}

// user.welcomeMessage()
// user.username = "aman"
// user.welcomeMessage()

// console.log(this); 
// returns {}
// outside obj, globally "this" returns empty obj
// in any browser "this" returns Window context

// const user1 = function() {
//     console.log(this);
//     let username = "admin"   
// }

const user1 = function() {
    let username = "admin"   
    console.log(this.username); 
    // "this" doesn't works with only functions
}

user1() 


const arrow_user = () => {  // => arrow function
    let username = "admin"   
    console.log(this);
}

arrow_user()



// Arrow Functions

// () => {} 

// const addTwoNum = (num1, num2) => {
//     return num1 + num2  // Explicit return
// }

const addTwoNum = (num1, num2) => (num1 + num2)   // Implicit return

// implicit return -> no return keyword used, wrapped in ( )
// explicit return -> return keyword used, wrapped in { }

console.log(addTwoNum(3,4))


const myArr = [2, 3, 5, 7, 9, 3]

myArr.forEach((myArr) => {console.log(`stock price on this day is ${myArr}`)})
