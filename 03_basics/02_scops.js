// ===============================
// Block Scope with let & const
// ===============================
let a = 300;

if (true) {
    let a = 10;         // Block-scoped variable (different from outer 'a')
    const b = 50;       // Block-scoped variable
    // console.log("Inner:", a);  // Would log: 10
}

// console.log(a);       
// console.log(b);        // Error: b is not defined outside the block


// ===============================
// Nested Functions & Scope
// ===============================
function one() {
    const username = "Ajit";

    function two() {
        const website = "youtube";
        console.log("Access from two():", username); // Works due to lexical scoping
    }

    // console.log(website); // Error: website is only defined inside two()

    two(); // Call inner function
}

// one(); // Uncomment to run


// ===============================
// Block Scope with Nested if
// ===============================
if (true) {
    const username = "himanshu";

    if (username === "himanshu") {
        const website = " youtube";
        console.log("Username + Website:", username + website);
    }

    // console.log(website); // Error: website is not accessible here
}

// console.log(username); // Error: username is block-scoped


// ==========================================
//Function Declaration vs Function Expression
// ==========================================

//  Function Declaration — Hoisted
console.log("Add One:", addone(5)); 

function addone(num) {
    return num + 1;
}

// Function Expression — Not Hoisted
// Will throw: Cannot access 'addtwo' before initialization
addtwo(2); 

const addtwo = function(num) {
    return num + 2;
};
