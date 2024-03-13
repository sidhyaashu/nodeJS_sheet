// You can use third-party modules by installing them via npm (Node Package Manager). For example, 
// let's use the popular axios module to make an HTTP request:

const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });