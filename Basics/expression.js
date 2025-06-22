let str1= "name"
let str2 = " anshika"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2)
// o/p 12

console.log(1+2)
// o/p 3

console.log(1+"2")
//o/p 12

console.log("1" +2+2)
// o/p 122

console.log(1+"2" + "2")
//o/p 122

console.log(1+ "2" + 2)
//o/p 122

console.log(1+ 2 + "2")
//o/p 32

        /* ***
        When at least one operand is a string, JS converts the other to a string and performs string concatenation.
        This is called type coercion (automatic type conversion).
        ***** */


console.log(3+4 *5 % 3)    //bad practice
//o/p 5


console.log(+true)
//o/p 1

//console.log(true+)  
// // error

console.log(+"")
//o/p 0