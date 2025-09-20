// ==========================
//  Object Creation
// ==========================

// const tinderUser = new Object()  // singleton way
const tinderUser = {}               // object literal way

tinderUser.id = "123abd"
tinderUser.name = "Himanshu"
tinderUser.isLoggedIn = false

console.log(tinderUser)


// ==========================
// Nested Objects
// ==========================
const regularUser = {
    email: "hyadav@1254gmail.com",
    fullname: {
        userfullname: {
            firstname: "himanshu",
            lastname: "Kumar"
        }
    }
}

console.log(regularUser.fullname.userfullname)


// ==========================
// Object Merging
// ==========================
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

//  Wrong way: const obj3 = {obj1, obj2}
//  Way 1: Object.assign()
// const obj3 = Object.assign({}, obj1, obj2)

// Way 2: Spread Operator
const obj3 = { ...obj1, ...obj2 }
console.log(obj3)


// ==========================
// Array of Objects
// ==========================
const users = [
    {
        id: 1,
        email: "yh@gamil.com",
    },
    {
        id: 2,
        email: "test@gmail.com",
    },
    {
        id: 3,
        email: "demo@gmail.com",
    }
]

console.log(users[1].email)  // accessing 2nd user's email


// ==========================
// Object Utilities
// ==========================
console.log(tinderUser)                   // complete object
console.log(Object.keys(tinderUser))      // all keys
console.log(Object.values(tinderUser))    // all values
console.log(Object.entries(tinderUser))   // [key, value] pairs

console.log(tinderUser.hasOwnProperty("isLoggedIn"))  
