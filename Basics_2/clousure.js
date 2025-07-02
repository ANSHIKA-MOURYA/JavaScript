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