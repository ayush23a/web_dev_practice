const addTwoNum = function(number1, number2){
    // const result = number1 + number2
    // console.log(result);
    return number1 + number2
    
}

const result = addTwoNum(3,4)
// console.log(`Result is ${result}`);

function isLoggedIn(username){
    //if (username === undefined){ // to track only undefined entries
    if (!username){  // to track the false values also -> "", undefined 
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}


const value = isLoggedIn("ayush")
// console.log(value);


function calculateCartValue(...num1){  // ... is used as REST operator here instead of spread opr
    return num1  // using REST opr we can add as many values into array as we want
}

// console.log(calculateCartValue(3,4,5,6)); //[3,4,5,6]

const user = {
    username: "ayush",
    price: 199
}

function getUser(anyObj){  // random parameter is used to refer to any obj key from the object.
    return `${anyObj.username} has price ${anyObj.price}`
}

// no this keyword is taken here

// console.log(getUser(user));

console.log(getUser({
    username : "aman",
    price : 299
}));


const myArr = [3,8,5,6]

function returnSecondValue(getArr){
    return getArr[1]
}

console.log(returnSecondValue(myArr));



