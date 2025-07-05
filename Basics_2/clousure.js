function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);                            //function two can access function one 
    }
    // console.log(website);                // here function one cant access function two as its not in scope

    two()
}                                           /* lets understand this by that small kid can 
                                            snatch icecream for elders, but elders cannot 
                                            snatch from kid, would not good look */
one()

//===================================
//same happens with if - else
if(true){
    const user_name = "hitesh"
    if(user_name === "hitesh"){
        const website = "youtube"
        console.log(user_name + website);                        // this will work as its in scope
    }

    //  console.log(website);                     // this will not work as its not in scope    
}
// console.log(user_name);                             // this will not work as its not in scope


//===================================

function addone(num){               // this is called normal function 
    return num + 1
}

addone(5)   


const addtwo = function(num){       // this is called function expression, as we are assigning function to a variable
   return num +2 
}

addtwo(5)    