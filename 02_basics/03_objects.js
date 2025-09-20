// =====================
// Objects in JavaScript
// =====================

// 1) Singleton vs Object literal
// singleton -> created using Object.create
// object literal -> normal way to create object

// Symbol (for unique property key)
const mySym = Symbol("key1")

// Object literal
const JsUser = {
    name: "Ajit",
    "fullname": "Ajit Kumar",     // property with space / special chars
    [mySym]: "mykey1",            // symbol as key
    age: 23,
    location: "Jaipur",
    email: "ayadav@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// =====================
// Accessing properties
// =====================
console.log(JsUser.email)          // dot notation
console.log(JsUser["email"])       // bracket notation
console.log(JsUser["fullname"])    // must use bracket if key has special chars
console.log(typeof JsUser[mySym])  // symbol property access


// =====================
// Modifying properties
// =====================
JsUser.email = "ajit12@gmail.com"

// Freeze object (no further changes allowed)
// Object.freeze(JsUser)

JsUser.email = "ajit456@gmail.com"  // if frozen, this won't update
console.log(JsUser)


// =====================
// Adding methods to object
// =====================
JsUser.greeting = function() {
    console.log("Hello Js User")
}

JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`)
}


// =====================
// Method calls
// =====================
console.log(JsUser.greetingTwo())  // 
console.log(JsUser.greeting())     // 
