// Node.js comes with a set of built-in modules that provide core functionality. 
// You can use these modules without installing anything additional. 
// Here's an example using the fs (file system) module to read a file:1

const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File contents:', data);
});