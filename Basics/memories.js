/* two types of memory
    stack -- stores primitive
    heap -- stores non-primitive

*/

// stack

let myYoutube = "youtube.com"

let anothername = myYoutube
anothername = "chaiaurcode"

console.log(myYoutube)
console.log(anothername)

// heap
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

console.log(userOne.email)

let userTwo = userOne

userTwo.email = "newemail@google.com"

console.log(userOne.email)
console.log(userTwo.email)