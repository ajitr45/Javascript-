// --------------------------------------------
// 1. TEMPERATURE CHECK (if-else)
// --------------------------------------------

const temperature = 41; // Declare near its usage

if (temperature === 40) {
    // If temperature is exactly 40
    console.log("Temperature is exactly 40");
} else {
    // For any other temperature
    console.log("Temperature is greater than 40");
}

console.log("Temperature check executed");


// --------------------------------------------
// 2. SCORE CHECK WITH BLOCK SCOPE
// --------------------------------------------

const score = 200; // Declared where used

if (score > 100) {
    const power = "fly"; // Block scoped
    console.log(`User power: ${power}`);
}

// This would throw an error if uncommented, because 'power' is not accessible outside
// console.log(`User power: ${power}`);


// --------------------------------------------
// 3. BALANCE CHECK USING if / else if / else
// --------------------------------------------

const balance = 1000;

if (balance < 500) {
    console.log("Balance is less than 500");
} else if (balance < 750) {
    console.log("Balance is less than 750");
} else if (balance < 900) {
    console.log("Balance is less than 900");
} else {
    console.log("Balance is less than 1200");
}


// --------------------------------------------
// 4. LOGICAL OPERATORS (AND / OR)
// --------------------------------------------

const userLoggedIn = true;
const debitCard = true;

// AND condition: both must be true
if (userLoggedIn && debitCard) {
    console.log("User is allowed to buy the course");
}

const loggedInFromGoogle = false;
const loggedInFromGmail = true;

// OR condition: at least one must be true
if (loggedInFromGoogle || loggedInFromGmail) {
    console.log("User is logged in");
}
