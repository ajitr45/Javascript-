// =====================
// Arrays in JavaScript
// =====================

// 1) Array declaration
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagaj"]

const myArr2 = [1, 2, 3, 4]

// Accessing element
console.log(myArr[1])   // 1


// =====================
//  Array Methods
// =====================

// Add elements at end
// myArr.push(6)
// myArr.push(7)

// Remove last element
// myArr.pop()

// Add element at start
// myArr.unshift(9)

// Remove element from start
// myArr.shift()

// Check if value exists
// console.log(myArr.includes(9))

// Find index of value
// console.log(myArr.indexOf(3))


// =====================
// join() -> convert array into string
// =====================
const newArr = myArr.join()

console.log(myArr)   // Original array
console.log(newArr)  // String form of array


// =====================
//  slice() vs splice()
// =====================

console.log("A ", myArr)

// slice(start, end) -> copies portion (does NOT change original)
const myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log("B ", myArr)  // original array remains same

// splice(start, deleteCount) -> removes/changes (DOES change original)
const myn2 = myArr.splice(1, 3)
console.log("C ", myArr)  // original array modified
console.log(myn2)         // removed elements
