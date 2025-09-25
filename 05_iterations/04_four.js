// -----------------------------------------------------
// 1. Looping through an Object using `for...in`
// -----------------------------------------------------

const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
};

// `for...in` gives keys (property names) of the object
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}



// -----------------------------------------------------
// 2. Looping through an Array using `for...in`
// -----------------------------------------------------

const programming = ["js", "rb", "py", "java", "cpp"];

// `for...in` gives the indexes (0, 1, 2, ...)
for (const index in programming) {
    console.log(programming[index]);
}



// -----------------------------------------------------
// 3. Looping through a Map using `for...in` (Incorrect)
// -----------------------------------------------------

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");

// `for...in` does not work on Map objects
// This will not log anything
// for (const key in map) {
//     console.log(key); // No output
// }



// -----------------------------------------------------
// 4. Correct way: Loop through a Map using `for...of`
// -----------------------------------------------------

// `for...of` gives each [key, value] pair from the Map
for (const [key, value] of map) {
    console.log(`${key} :- ${value}`);
}

// You can also loop only keys or values if needed:
// for (const key of map.keys()) { ... }
// for (const value of map.values()) { ... }
