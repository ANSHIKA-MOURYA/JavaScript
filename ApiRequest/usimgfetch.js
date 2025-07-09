//Introduced in ES6, fetch() is built-in, modern, and returns a Promise.

// This is using the Fetch API to make a GET request to a placeholder API.
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));


// This is using the Fetch API to make a POST request to a placeholder API.
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ title: "Hello", body: "World" }),
})
  .then(res => res.json())
  .then(data => console.log(data));


  /* 
  ✅ Pros:
Cleaner syntax with Promises

Native — no installation required

Easily used with async/await

⚠️ Cons:
Does not automatically reject on HTTP errors (like 404, 500)

Need to check response.ok manually
*/