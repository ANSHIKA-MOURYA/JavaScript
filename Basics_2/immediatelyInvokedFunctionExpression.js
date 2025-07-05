//===========Immediately Invoked Function Expression (IIFE)===========
/* 
    An IIFE is a function that runs as soon as it is defined.
    It is a common JavaScript design pattern that allows you to 
    execute code immediately without polluting
    the global scope. It is often used to create a private scope 
    for variables and functions.
*/

(function chai() {                  //named function
    let username = "anshika";
    console.log(`${username}, welcome`); // anshika, welcome
})(); // Immediately Invoked Function Expression    

/* to end or stop iife we use ; at the end of the function declaration
or else the code would not understand where te stop execution */


// === arrow function IIFE ===
(() => {                 //not named function
    let username = "anshika";
    console.log(`${username}, welcome`); // anshika, welcome
})(); // Immediately Invoked Function Expression