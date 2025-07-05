const user = {
    username : "anshika",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome`);
    }
}

user.welcomeMessage(); //anshika, welcome
user.username = "nickey"        // changing the username , 
user.welcomeMessage();          //nickey, welcome

console.log(this)           //{}


//==========this inside regular fxn

function thisUsecaseInsideFxn(){
    let username = "nickey";
 
    console.log(this)                           // this stores a lot in itself is used inside fxn
    console.log(`${this.username}, welcome`); 
}
thisUsecaseInsideFxn(); //undefined, welcome

//==========this inside arrow fxn

const chai =() => {
    let username = "nickey"
    console.log(this)
}


const addtwo = (num1, mum2) =>{
    return num1 + num2
}

//======implicit return
const addtwo2 = (num1, mum2) => num1 + num2 