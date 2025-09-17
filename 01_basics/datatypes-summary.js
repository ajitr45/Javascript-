// Primitive 

// 7 types : string, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456489763254359n

// Reference (No primitive)

// Array, Objects, function

const heros = ["shaktiman","naagraj","doga"]

let myobj = {
    name: "ajit",
    age: 22
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);



//+++++++++++++++++++++++++++++++++++++++++++

// stack (Primritive), Heap (Non-Primitive)

let myYoutubename = "himanshukumardotcom"

let anothername = "abhikrdotcom"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email:"user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "ajit@google.com0"

console.log(userOne);
console.log(userTwo);

