/*
    How it works:
    You write async before a function

    Use await before a promise inside it

    JS waits for the result without blocking the rest of your app
*/


async function getPizza() {
  try {
    const pizza = await orderPizza(); // pause here until resolved
    console.log("Pizza is ready:", pizza);
  } catch (err) {
    console.error("Something went wrong:", err);
  }
}

getPizza();
console.log("Continue watching Netflix");
