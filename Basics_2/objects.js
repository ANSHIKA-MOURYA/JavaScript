const user ={
    name: "Anshika",
    age: 20,
    email: "xyz@gmail.com",
    isLoogedIn: false,
}

console.log(user.name)
console.log(user["name"])

const newuser ={
    name: "Mourya",
    "fullname" : "Anshika Mourya",      //this is not accesible by newuser.fullname 
    age: 20,
    email: "xab@gmail.com",
    isLoogedIn: false,
}

console.log(newuser.fullname)
console.log(newuser["fullname"])



// using Symbol datatype
const mySym = Symbol("key1")

const newUser ={
    name: "Mourya",
    "fullname" : "Anshika Mourya",      //this is not accesible by newuser.fullname 
    age: 20,
    [mySym]: "mykey1",                 // this is synatax to use SYMBOL // to refer symbol
    email: "xab@gmail.com",
    isLoogedIn: false,
}

console.log(newUser.fullname)
console.log(newUser["fullname"])

console.log(newUser[mySym])   //Symbol

console.log(typeof(newUser[mySym]))    //String
console.log(typeof(newUser.mySym))   


FREEZE
console.log("use of freeze")
const auser = {
    email: "xyz"
}

auser.email = "anshika@gmail.com"
console.log(auser.email)            //o/p: anshika@gmail.com

Object.freeze(auser)

auser.email = "nickey@gmail.com"
console.log(auser.email)           //o/p: anshika@gmail.com


