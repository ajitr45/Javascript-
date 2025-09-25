// -------------------------------------
// Truthy / Falsy Check Example
// -------------------------------------

const userEmail = [];

if (userEmail) {
    console.log("Got the user email");
} else {
    console.log("Don't have user email");
}

// -------------------------------------
// Falsy Values in JavaScript:
// -------------------------------------
// false, 0, -0, 0n (BigInt zero), "", null, undefined, NaN

// -------------------------------------
// Truthy Values in JavaScript:
// -------------------------------------
// "0", "false", " ", [], {}, function() {}


// -------------------------------------
// Check if an Object is Empty
// -------------------------------------

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// -------------------------------------
// Nullish Coalescing Operator (??)
// -------------------------------------
// Returns the first value that is NOT null or undefined

let val1;

// Examples:
// val1 = 5 ?? 10             // → 5
// val1 = null ?? 5           // → 5
// val1 = undefined ?? 10     // → 10

val1 = null ?? 10 ?? 20;

console.log("val1:", val1);  // Output: 10


// -------------------------------------
// Ternary Operator Example
// -------------------------------------
// Syntax: condition ? expression_if_true : expression_if_false

const iceTeaPrice = 100;

iceTeaPrice <= 80 
    ? console.log("Ice tea price is less than or equal to 80")
    : console.log("Ice tea price is more than 80");
