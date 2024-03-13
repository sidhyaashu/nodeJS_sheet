// Import the 'fs' module for file system operations
const fs = require('fs');

// Get the current working directory
const currentWorkingDirectory = process.cwd();
console.log('Current working directory:', currentWorkingDirectory);

// Use fs.readdir to list the files in the current working directory
fs.readdir(currentWorkingDirectory, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }
  
  console.log('Files in the current directory:');
  files.forEach(file => {
    console.log(file);
  });
});
