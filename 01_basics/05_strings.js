// String Basics & Template Literals
const name = "hitesh"
const repCount = 50

// Old way (concatenation)
console.log(name + repCount + " Value");

// Modern way (template literals / backtick)
console.log(`Hello my name is ${name} and my rep count is ${repCount}`);


// String as Object (new String)
const gameName = new String("Himanshu-hc-da");

// Access by index
console.log(gameName[0]);   // H

// String ke hidden methods
console.log(gameName.__proto__);



// String Properties & Methods
console.log(gameName.length);       // 14 (total characters)
console.log(gameName.toUpperCase()); // "HIMANSHU-HC-DA"
console.log(gameName.charAt(2));    // m
console.log(gameName.indexOf('s')); // 4



// Substring & Slice
const newString = gameName.substring(0,4)
console.log(newString);    // "Hima"

const anotherString = gameName.slice(0,5)
console.log(anotherString); // "Himan"



// Trim (remove spaces)
const newStringOne = "   hitesh    "
console.log(newStringOne);         // "   hitesh    "
console.log(newStringOne.trim());  // "hitesh"



// Replace & Includes
const url = "https://hyadav.com/hyadav%20himanshu"

console.log(url.replace('%20','-'));   // "https://hyadav.com/hyadav-himanshu"
console.log(url.includes('sundar'));   // false



//  7. Split (String → Array)
console.log(gameName.split('-'));  
// [ 'Himanshu', 'hc', 'da' ]
