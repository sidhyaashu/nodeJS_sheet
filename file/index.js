// Reading Files:
const fs = require("fs");

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// Writing Files:
const fs = require("fs");

fs.writeFile("file.txt", "Hello, world!", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File written successfully.");
});

// Appending to Files:
const fs = require("fs");

fs.appendFile("file.txt", "New data to append\n", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Data appended to file.");
});

// Renaming Files:
const fs = require("fs");

fs.rename("oldfile.txt", "newfile.txt", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File renamed successfully.");
});

// Deleting Files:
const fs = require("fs");

fs.unlink("file.txt", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File deleted successfully.");
});

// Checking if File Exists:
const fs = require("fs");

fs.access("file.txt", fs.constants.F_OK, (err) => {
  if (err) {
    console.error("File does not exist.");
    return;
  }
  console.log("File exists.");
});

// Creating Directories:
const fs = require("fs");

fs.mkdir("newDirectory", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Directory created successfully.");
});

// Reading Directories:
const fs = require("fs");

fs.readdir(".", (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Files in directory:", files);
});

// Deleting Directories:
const fs = require("fs");

fs.rmdir("directoryToDelete", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Directory deleted successfully.");
});
