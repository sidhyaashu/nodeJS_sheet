// Basic Usage:
setTimeout(() => {
    console.log('This message will be logged after 1000 milliseconds.');
}, 1000);


// Using Parameters:
setTimeout((param1, param2) => {
    console.log(`Received parameters: ${param1}, ${param2}`);
}, 2000, 'Hello', 'World');


// Cancelling Timeout:
const timeoutId = setTimeout(() => {
    console.log('This message will not be logged because the timeout is cancelled.');
}, 3000);

clearTimeout(timeoutId); // Cancels the timeout


// Basic Usage:
let counter = 0;
const intervalId = setInterval(() => {
    console.log(`Counter: ${++counter}`);
}, 1000);

// Stopping Interval:
setTimeout(() => {
    clearInterval(intervalId); // Stops the interval after 5000 milliseconds
}, 5000);


// Using Arrow Functions with Parameters:
const intervalId = setInterval((param1, param2) => {
    console.log(`Received parameters: ${param1}, ${param2}`);
}, 2000, 'Hello', 'World');


// Using unref to Allow Node.js Process to Exit:
const intervalId = setInterval(() => {
    console.log('This message will be logged every 1000 milliseconds.');
}, 1000);

intervalId.unref(); // Allows the process to exit even if this interval is still active
