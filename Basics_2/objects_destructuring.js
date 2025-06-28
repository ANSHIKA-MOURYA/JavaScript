const obj = { name: "Anshika", age: 21 };

// Destructuring    *** it is widely used in react
const { name, age } = obj;

console.log(name); // "Anshika"
console.log(age);  // 21
/*
        name and age are keys in the object.

       You’re declaring variables named name and 
       age, and assigning them values from the object 
       with the same key names.
*/

/*
    const name = obj.name;
    const age = obj.age;

    //Destructuring is just a cleaner shortcut for this pattern.

*/