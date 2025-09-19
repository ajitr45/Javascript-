// =====================
// Dates in JavaScript
// =====================

// 1) Current Date
let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)


// 2) Create Date in different ways
// let myCreatedDate = new Date(2025, 0, 20)       // Year, Month(0-based), Day
// let myCreatedDate = new Date(2025, 0, 20, 5, 3) // With time
// let myCreatedDate = new Date("2025-01-15")      // ISO format
let myCreatedDate = new Date("01-15-2025")         // MM-DD-YYYY format
// console.log(myCreatedDate.toLocaleString())


// 3) Working with Timestamps
let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))   // Convert ms → seconds


// 4) Extracting values from Date
let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth() + 1)   // Month (1-based)
// console.log(newDate.getDay())         // Weekday (0=Sun..6=Sat)


// 5) Formatting with options
console.log(
  newDate.toLocaleString('default', {
    weekday: "long"
  })
)
