function calculate(num1){
    return num1
}

console.log(calculate(200, 300)) //200

function calculateMultiple(...num1){  // Rest Parameters
    return num1
}

console.log(calculateMultiple(200, 300, 400, 500))     // [200, 300, 400, 500]


function newCalculateMultiple(val1, val2, ...num1){
    return num1
}

console.log(newCalculateMultiple(200, 300, 400, 500))   // [400,500]



const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price} `)
}

handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

//array
const newArray = [200, 400, 500, 600]

function returnArrayValue(getArray){
    return getArray[1]
}

console.log(returnArrayValue(newArray))