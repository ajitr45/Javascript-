// ----------------------------------------------
// 1. Looping through an Array using `for...of`
// ----------------------------------------------
const arr = [1, 2, 3, 4, 5];

// `for...of` loops through the values in the array
for (const num of arr) {
    console.log(num);
}



// ----------------------------------------------
// 2. Looping through a String using `for...of`
// ----------------------------------------------
const greeting = "Hello World!";

// `for...of` works on strings and returns each character
for (const char of greeting) {
    console.log(`Each char is ${char}`);
}



// ----------------------------------------------
// 3. Looping through a Map using `for...of`
// ----------------------------------------------
const map = new Map();

// Adding key-value pairs to the map
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");

// `for...of` returns [key, value] pairs from the map
for (const [key, value] of map) {
    console.log(`${key} :- ${value}`);
}



// ----------------------------------------------
// 4. Looping through a plain Object (Incorrect)
// ----------------------------------------------
const myObject = {
    game1: "NFS",
    game2: "Spiderman"
};

// This will throw an error: "myObject is not iterable"
// for (const [key, value] of myObject) {
//     console.log(key, ":-", value);
// }



// ----------------------------------------------
// 5. Correct way: Use Object.entries() with `for...of`
// ----------------------------------------------
for (const [key, value] of Object.entries(myObject)) {
    console.log(`${key} :- ${value}`);
}



// -------------------------------------------
// 6. Using `for...in` to loop over object keys
// -------------------------------------------
for (const key in myObject) {
    console.log(`${key} :- ${myObject[key]}`);
}
