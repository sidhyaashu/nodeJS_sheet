// ======================================================='error' Event:=======================================================
const EventEmitter = require("events");

const myEmitter = new EventEmitter();

// Error event listener
myEmitter.on("error", (error) => {
  console.error("Error occurred:", error);
});

// Emitting an error
myEmitter.emit("error", new Error("Something went wrong!"));

// ======================================================='uncaughtException' Event:=======================================================
process.on("uncaughtException", (error) => {
  console.error("Uncaught exception occurred:", error);
});

// Triggering an uncaught exception
throw new Error("Oops! This is an uncaught exception.");

// ======================================================='unhandledRejection' Event:=======================================================
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled rejection:", reason);
});

// Triggering an unhandled rejection
Promise.reject(new Error("Oops! This is an unhandled rejection."));

// =======================================================HTTP Server 'error' Event:=======================================================
const http = require("http");

const server = http.createServer((req, res) => {
  // Handling requests
});

server.on("error", (error) => {
  console.error("HTTP server error:", error);
});

// Starting the server
server.listen(3000);
