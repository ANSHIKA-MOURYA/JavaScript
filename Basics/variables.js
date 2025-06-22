const accountId = 34;
// accountId = 2    //Not possible to change  as declared as const


var accountPass = 58;

let accountEmail = "xay@gmail.com";

accountCity = "Indore";


console.log([accountId, accountPass, accountEmail, accountCity])

// giving new values
//accountId = 78     //not possible
accountPass = 98
accountEmail = "abc@gmail.com";
accountCity = "Mhow";

console.log([accountId, accountPass, accountEmail, accountCity])



/*
 Avoiding using var 
because of issue in block scope and functional scope
*/


accountPass = 98
accountEmail = "abc@gmail.com";
accountCity = "Mhow";
let accountState;    //left undefined

console.log([accountId, accountPass, accountEmail, accountCity, accountState])

//output: [ 34, 98, 'abc@gmail.com', 'Mhow', undefined ]