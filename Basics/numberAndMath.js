// // ****************NUMBER*****************

// const score = 400
// console.log(score)
//                                     // how this two different

// // Numver
// const balance = new Number(100)
// console.log(balance)


// console.log(balance.toString().length) /* conveting it to string gave it all the
//                                              methods and functions of string */

// console.log(typeof(balance))


// //toFixed()
// console.log(balance.toFixed(1));
// console.log(balance.toFixed(3));

// console.log(typeof(balance))

// const number = 100.2359
// console.log(number.toFixed(3));   // give value up to 3 decimal points withput roundoff

// //toPrecision
// const otherNumber = 23.568798746545654684
// console.log(otherNumber.toPrecision())

// console.log(otherNumber.toPrecision(3))     // give 3 values by rounding off

// console.log(typeof(otherNumber))



// ****************MATH*****************
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.365))
console.log(Math.ceil(-4.2))
console.log(Math.floor(-4.6))
 
console.log(Math.random())                     //gives value between 0 and 1
console.log((Math.random()*10)+1)


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min +1)) + min )  //wiil give value between 10 and 20