// let a = 10;                      // global scope
// const b = 20;                   
// var c = 30; 

// console.log(a)  // 10
// console.log(b)  // 20
// console.log(c)  // 30

// =========================

/* global me hum jo bhi value likhte hai vo available hoti hai scope ke 
andr but local ya blocked globally avialable nhi hoti*/


// **** let and const blocked scope nature******

// if (true) {         // start of block scope
//     let a = 10;                     // let and const are blocked scope
//     const b = 20;                   // let and const are blocked scope
//     var c = 30;                     // var is not a blocked scope
// }

// console.log(a)  // ReferenceError
// console.log(b)  // ReferenceError
// console.log(c)  //  30

//=========================================

// let a = 100                 //globally available
// c = 20                      //globally available
// if (true) {
//     let a = 10;                     // locally available
//     const b = 20;                  
//     var c = 30;                     //globally available
//     console.log("inner var c" , c)   
//     console.log("inner let a" ,a)               
// }

// console.log("outer let a", a)  
// // console.log(b)  
// console.log("outer var c" , c)  

//==============================================

