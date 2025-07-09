// axios is a Promise-based HTTP client library for browsers & Node.js

// It is often used for making HTTP requests in JavaScript applications.
// It provides a simple API for sending requests and handling responses.
// It supports features like request cancellation, interceptors, and automatic JSON data transformation.
// It is widely used in modern web development, especially with frameworks like React, Vue, and Angular.
// It can be installed via npm or used directly in the browser via a CDN link.
//    "Content-Type": "application/json",
//    },
//    body: JSON.stringify({ title: "Hello", body: "World" }),
//  })


// this is using the axios API to make a GET request to a placeholder API.
import axios from "axios";

axios.get("https://jsonplaceholder.typicode.com/posts")
  .then(response => console.log(response.data))
  .catch(error => console.error("Error:", error));


// This is using the axios API to make a GET request to a placeholder API.
import axios from "axios";

axios.get("https://jsonplaceholder.typicode.com/posts")
  .then(response => console.log(response.data))
  .catch(error => console.error("Error:", error));
