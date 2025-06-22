"use strict"; //treat all JS code as newer versions

let isLoggedIn = 1
let state;
let age = 18
let limit = "10"


console.log(typeof age)
console.log(typeof limit)


console.log(typeof null) /*
 output: object

 */


 let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn)

    let one = ""
     let booleanOne = Boolean(one)
     console.log(booleanOne)   //output false

    let two = "anshika"
    let booleanTwo = Boolean(two)
    console.log(booleanTwo)    //output true


    /* PRIMITIVE DATA TYPES

         7  types : 

            string
            number
            bigint
            boolean
            symbol
            null 
            undefined
    */

    /* NON PRIMITIVE OR REFERENCE

            array
            objects
            function
    */


//array
const heros= ["Ironman", "thor", "Hulk", "Captain America", "Loki"]
console.log(heros)

//obejct
let about = {
    Hero : "Ironman",
    name: "Tony Stark",
    Actor: "Robert Downey Jr.",
    age: 54,
    movies: "avenger"
}
console.log(about)


//function
const functionaname = function(){
    console.log("avengers super heros")
}
functionaname()

console.log(typeof functionaname)