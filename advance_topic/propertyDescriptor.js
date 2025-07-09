const descriptor =  Object.getOwnPropertyDescriptor(Math)

console.log(Math.PI);
Math.PI = 5
console.log(Math.PI); // 3.141592653589793
console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

// in this changing the value of pi is not possible as it is in depth made hardcoded false
/*
    3.141592653589793
    3.141592653589793
    {
    value: 3.141592653589793,  // in depth made false
    writable: false,
    enumerable: false,
    configurable: false
    }

*/

// we can also make property like this for us
const chai ={
    name: 'ginger chai',
    price: 250,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

Object.defineProperties(chai, 'name', {
    value: 'masala chai',
    writable: false,
    enumerable: false,
    configurable: true
})

