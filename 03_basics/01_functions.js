// Function to print each letter of "HIMANSHU"
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    console.log("U");
}

// Calling the function to print the name
// sayMyName();


// Function to add two numbers and return the result
function addTwoNumbers(number1, number2){
    return number1 + number2;
}

// Storing the result of addition
// const result = addTwoNumbers(3, 5);

// Printing the result
// console.log("Result:", result);


// Function to show a login message based on username
function loginUserMessage(username){
    // If no username is passed, show a warning and exit
    if (username === undefined) {
        // console.log("Please enter a username");
        return;
    }

    // If username is provided, return login message
    return `${username} just logged in`;
}

// Calling the function without passing username
// console.log(loginUserMessage());

// Example: calling the function with a username
// console.log(loginUserMessage("hitesh"));


function calculateCarPrice(val1,val2,...num1){
    return num1

}

// console.log(calculateCarPrice(200, 400, 500, 2000));

const user = {
    username: "Ajit",
    price: 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "Abhi",
    price:399
})

const newArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(newArray));

