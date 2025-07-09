fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))        // handle data
  .catch(err => console.error(err));      // handle error

  //This is using a Promise.
// fetch() gives you a Promise.