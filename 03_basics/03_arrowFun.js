// Object with a method using 'this'
const user = {
    username: "sannvi",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        // 'this' refers to the 'user' object
        // console.log(this);
    }
};

// user.welcomeMessage();
// user.username = "Pari";
// user.welcomeMessage();

// console.log(this); // Top-level 'this' in Node.js is {}

// Regular function (not inside an object)
const chai = function () {
    let username = "abhi";
    console.log(this.username); // 'this' does not refer to local variable
};

chai();

// Arrow function with explicit return
// const addTwo = (num1, num2) => {
//     // return num1 + num2;
// };

console.log(addTwo(3, 4));

// Arrow function with implicit return
// const addTwo = (num1, num2) => (num1 + num2);

// Arrow function returning an object
const addTwo = (num1, num2) => ({ username: "sannvi" });

console.log(addTwo(4, 9));
