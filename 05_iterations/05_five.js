// --------------------------------------------------------
// 1. Using forEach with a simple array of strings
// --------------------------------------------------------

const coding = ["js", "ruby", "java", "python", "cpp"]; 
// An array of programming language shortcuts

// Anonymous function inside forEach
coding.forEach(function (item) {
    console.log(item); 
    // Prints each item (language) from the array
});


// Using a named function with forEach
function printMe(item) {
    console.log(item); 
    // This function logs the item it receives
}

coding.forEach(printMe); 
// Passing the named function as a callback to forEach


// Arrow function inside forEach
coding.forEach((item) => {
    console.log(item); 
    // Again, logs each item using arrow syntax
});



// --------------------------------------------------------
// 2. Using forEach with an array of objects
// --------------------------------------------------------

const myCoding = [
    {
        languageName: "javascript",        // Name of the language
        languageFileName: "js"             // File extension
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "j"
    }
];
// An array of objects, each representing a programming language


// Using forEach to access each object in the array
myCoding.forEach((item) => {
    console.log(item.languageName); 
    // Logs the value of 'languageName' from each object
});


