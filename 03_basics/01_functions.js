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
        console.log("Please enter a username");
        return;
    }

    // If username is provided, return login message
    return `${username} just logged in`;
}

// Calling the function without passing username
console.log(loginUserMessage());

// Example: calling the function with a username
// console.log(loginUserMessage("hitesh"));
