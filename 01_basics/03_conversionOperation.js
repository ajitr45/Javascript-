// ******** Type Conversion ********

let score = "Himanshu"
console.log("score:", score, "| type:", typeof score)

let valueInNumber = Number(score)
console.log("valueInNumber:", valueInNumber, "| type:", typeof valueInNumber)
// "Himanshu" => NaN (type is still number)

let isLoggedIn = "Himanshu"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log("booleanIsLoggedIn:", booleanIsLoggedIn)
// Non-empty string => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log("stringNumber:", stringNumber, "| type:", typeof stringNumber)
// 33 => "33" (string)


// ******** Operations ********

let value = 3
let negValue = -value
console.log("negValue:", negValue)

console.log("2+2 =", 2 + 2)
console.log("2-2 =", 2 - 2)
console.log("2*2 =", 2 * 2)
console.log("2**5 =", 2 ** 5) // exponentiation
console.log("2/2 =", 2 / 2)
console.log("3%2 =", 3 % 2)   // remainder


// ******** String Concatenation ********

let str1 = "Hello"
let str2 = " Ajit"
let str3 = str1 + str2
console.log("Concatenated:", str3)

console.log('"1" + 2 =', "1" + 2) 
console.log('1 + "2" =', 1 + "2")
console.log('"1" + "2" =', "1" + "2")
console.log('"1" + 2 + 2 =', "1" + 2 + 2) 
console.log('1 + 2 + "2" =', 1 + 2 + "2")


// ******** Unary Plus ********

console.log("+true =", +true)   // 1
console.log('+"" =', +"")       // 0


// ******** Increment Operator ********

let gameCounter = 100
console.log("Before post-increment (gameCounter):", gameCounter)

console.log("Using gameCounter++ (returns old value):", gameCounter++)

console.log("After post-increment (gameCounter):", gameCounter)

let anotherCounter = 100
console.log("Before pre-increment (++anotherCounter):", anotherCounter)
console.log("Using ++anotherCounter (returns new value):", ++anotherCounter)
console.log("After pre-increment (anotherCounter):", anotherCounter)
