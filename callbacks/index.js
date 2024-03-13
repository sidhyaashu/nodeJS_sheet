function fetchData(callback) {
  console.log("1");
  // Simulate fetching data asynchronously
  setTimeout(function () {
    const data = { name: "John", age: 30 };
    console.log("2");
    callback(data);
    console.log("3");
  }, 1000);
}
console.log("4");
function processData(data) {
    console.log("5");
  console.log("Data received:", data);
}
console.log("6");

fetchData(processData);
console.log("7");
console.log("Fetching data...");
