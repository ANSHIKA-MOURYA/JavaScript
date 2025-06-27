//*DATES****


//date is object in javascript
let myDate = new Date()
console.log(typeof(myDate))

//all are different methods to show date

console.log(myDate)                    // in less readable form => 2025-06-27T17:36:42.944Z

console.log(myDate.toString())           //more readbale form in form of string => Fri Jun 27 2025 17:36:42 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString())       // more => Fri Jun 27 2025

console.log(myDate.toLocaleString())   // 6/27/2025, 5:36:42 PM


/* in javascript month start from 0
    (2023, 0, 23) => here 0 refers to month jan */

    let myCreatedDate = new Date(2023, 0, 23)
    console.log(myCreatedDate)

    // to print in the form of yyyy-mm-dd

     let newCreatedDate = new Date("2023-01-23")
    console.log(newCreatedDate.toLocaleString())
