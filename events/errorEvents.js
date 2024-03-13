/**
 *  some types of error

SyntaxError
ReferenceError
TypeError
RangeError
URIError
EvalError
InternalError
SystemError
PromiseRejectionError
CallbackError
ModuleNotFoundError
SecurityError
MemoryLeakError
ConcurrencyError
ThirdPartyDependencyError
 */

//---------===========------------==============------one of the best error handler-------==============---------------============------------==========
const EventEmitter = require("events");

// Define custom error events
class CustomErrorEmitter extends EventEmitter {}

// Instantiate the custom error emitter
const customErrorEmitter = new CustomErrorEmitter();

// Error handler for SyntaxError
customErrorEmitter.on("syntaxError", (error) => {
  console.error("SyntaxError occurred:", error.message);
  // Additional error handling logic can be added here
});

// Error handler for ReferenceError
customErrorEmitter.on("referenceError", (error) => {
  console.error("ReferenceError occurred:", error.message);
  // Additional error handling logic can be added here
});

// Error handler for other types of errors
customErrorEmitter.on("error", (error) => {
  console.error("An error occurred:", error.message);
  // Additional error handling logic can be added here
});

// Example function that might throw different types of errors
function exampleFunction() {
  try {
    // Simulate SyntaxError
    // eval('foo bar'); // Uncomment to simulate SyntaxError

    // Simulate ReferenceError
    // const x = y; // Uncomment to simulate ReferenceError

    // Simulate other error
    throw new Error("Custom error occurred");
  } catch (error) {
    // Emit appropriate error event based on error type
    if (error instanceof SyntaxError) {
      customErrorEmitter.emit("syntaxError", error);
    } else if (error instanceof ReferenceError) {
      customErrorEmitter.emit("referenceError", error);
    } else {
      customErrorEmitter.emit("error", error);
    }
  }
}

// Invoke the example function
exampleFunction();

//-============------------================-------------------=====================--------------------======================---------

// SyntaxError
// ReferenceError
// TypeError
// RangeError
// URIError
// EvalError
// InternalError
// SystemError
// PromiseRejectionError
// CallbackError
// ModuleNotFoundError
// SecurityError
// MemoryLeakError
// ConcurrencyError
// ThirdPartyDependencyError

const EventEmitter = require("events");

// Define custom error emitter
class CustomErrorEmitter extends EventEmitter {}

// Instantiate the custom error emitter
const customErrorEmitter = new CustomErrorEmitter();

// Error handler for SyntaxError
customErrorEmitter.on("SyntaxError", (error) => {
  console.error("SyntaxError occurred:", error.message);
  // Additional error handling logic specific to SyntaxError
});

// Error handler for ReferenceError
customErrorEmitter.on("ReferenceError", (error) => {
  console.error("ReferenceError occurred:", error.message);
  // Additional error handling logic specific to ReferenceError
});

// Error handler for TypeError
customErrorEmitter.on("TypeError", (error) => {
  console.error("TypeError occurred:", error.message);
  // Additional error handling logic specific to TypeError
});

// Error handler for RangeError
customErrorEmitter.on("RangeError", (error) => {
  console.error("RangeError occurred:", error.message);
  // Additional error handling logic specific to RangeError
});

// Error handler for URIError
customErrorEmitter.on("URIError", (error) => {
  console.error("URIError occurred:", error.message);
  // Additional error handling logic specific to URIError
});

// Error handler for EvalError
customErrorEmitter.on("EvalError", (error) => {
  console.error("EvalError occurred:", error.message);
  // Additional error handling logic specific to EvalError
});

// Error handler for InternalError
customErrorEmitter.on("InternalError", (error) => {
  console.error("InternalError occurred:", error.message);
  // Additional error handling logic specific to InternalError
});

// Error handler for SystemError
customErrorEmitter.on("SystemError", (error) => {
  console.error("SystemError occurred:", error.message);
  // Additional error handling logic specific to SystemError
});

// Error handler for PromiseRejectionError
customErrorEmitter.on("PromiseRejectionError", (error) => {
  console.error("PromiseRejectionError occurred:", error.message);
  // Additional error handling logic specific to PromiseRejectionError
});

// Error handler for CallbackError
customErrorEmitter.on("CallbackError", (error) => {
  console.error("CallbackError occurred:", error.message);
  // Additional error handling logic specific to CallbackError
});

// Error handler for ModuleNotFoundError
customErrorEmitter.on("ModuleNotFoundError", (error) => {
  console.error("ModuleNotFoundError occurred:", error.message);
  // Additional error handling logic specific to ModuleNotFoundError
});

// Error handler for SecurityError
customErrorEmitter.on("SecurityError", (error) => {
  console.error("SecurityError occurred:", error.message);
  // Additional error handling logic specific to SecurityError
});

// Error handler for MemoryLeakError
customErrorEmitter.on("MemoryLeakError", (error) => {
  console.error("MemoryLeakError occurred:", error.message);
  // Additional error handling logic specific to MemoryLeakError
});

// Error handler for ConcurrencyError
customErrorEmitter.on("ConcurrencyError", (error) => {
  console.error("ConcurrencyError occurred:", error.message);
  // Additional error handling logic specific to ConcurrencyError
});

// Error handler for ThirdPartyDependencyError
customErrorEmitter.on("ThirdPartyDependencyError", (error) => {
  console.error("ThirdPartyDependencyError occurred:", error.message);
  // Additional error handling logic specific to ThirdPartyDependencyError
});

// Example function to throw different types of errors
function exampleFunction(errorType) {
  try {
    switch (errorType) {
      case "SyntaxError":
        eval("foo bar");
        break;
      case "ReferenceError":
        const x = y;
        break;
      case "TypeError":
        null.method(); // TypeError: Cannot read property 'method' of null
        break;
      case "RangeError":
        const arr = new Array(-1); // RangeError: Invalid array length
        break;
      case "URIError":
        decodeURI("%");
        break;
      case "EvalError":
        throw new EvalError("Custom EvalError");
        break;
      case "InternalError":
        throw new InternalError("Custom InternalError");
        break;
      case "SystemError":
        throw new SystemError("Custom SystemError");
        break;
      case "PromiseRejectionError":
        Promise.reject(new Error("Custom PromiseRejectionError"));
        break;
      case "CallbackError":
        // Simulating callback error
        customErrorEmitter.emit(
          "CallbackError",
          new Error("Custom CallbackError")
        );
        break;
      case "ModuleNotFoundError":
        require("nonexistentmodule");
        break;
      case "SecurityError":
        throw new SecurityError("Custom SecurityError");
        break;
      case "MemoryLeakError":
        // Simulating memory leak error
        setInterval(() => {}, 1000);
        break;
      case "ConcurrencyError":
        // Simulating concurrency error
        throw new ConcurrencyError("Custom ConcurrencyError");
        break;
      case "ThirdPartyDependencyError":
        // Simulating third-party dependency error
        throw new ThirdPartyDependencyError("Custom ThirdPartyDependencyError");
        break;
      default:
        throw new Error("Unknown error type");
    }
  } catch (error) {
    customErrorEmitter.emit(errorType, error);
  }
}

// Example function invocation
exampleFunction("SyntaxError");

//--------------------------------------------------------------------------------------------------------
// try-catch Blocks: You can use traditional try-catch blocks to catch synchronous errors within your code.

try {
  // Code that might throw an error
} catch (error) {
  // Handle the error
}

//--------------------------------------------------------------------------------------------------------
// Error Events: Many objects in Node.js emit 'error' events when something goes wrong.
// You can listen for these events and handle errors accordingly.

//--------------------------------------------------------------------------------------------------------
someObject.on("error", (error) => {
  // Handle the error
});

//--------------------------------------------------------------------------------------------------------
// Promises: When working with asynchronous operations using
// Promises, you can use .catch() to handle errors.

somePromiseFunction()
  .then((result) => {
    // Handle success
  })
  .catch((error) => {
    // Handle error
  });

//--------------------------------------------------------------------------------------------------------
// Async/Await: With the async/await syntax, you can handle
// errors using try-catch blocks for asynchronous operations.

async function someAsyncFunction() {
  try {
    const result = await someAsyncOperation();
    // Handle success
  } catch (error) {
    // Handle error
  }
}

//--------------------------------------------------------------------------------------------------------
// Middleware: In Express.js and other Node.js frameworks, you can define error-handling
// middleware to catch errors that occur during request processing.

app.use((err, req, res, next) => {
  // Handle the error
  res.status(500).send("Something broke!");
});

//--------------------------------------------------------------------------------------------------------
// Custom Errors: Sometimes, it's beneficial to define custom error classes
// for different types of errors in your application.

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

throw new CustomError("This is a custom error message.");

//--------------------------------------------------------------------------------------------------------
// Custom EventEmitter Error Events: If you create your own EventEmitter instances,
// you can emit 'error' events to indicate errors within your code.

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("error", (error) => {
  console.error("Custom EventEmitter error:", error);
});

// Emits an error event
myEmitter.emit("error", new Error("Something went wrong!"));

//api k liye----------=============-------------================---------------==============------------------===========---------========
const express = require("express");
const app = express();

// Middleware to handle errors
app.use((err, req, res, next) => {
  // Log the error for debugging purposes
  console.error(err.stack);

  // Respond with an appropriate error message to the client
  res.status(500).send("Something went wrong!");
});

// Example route that throws an error
app.get("/example", (req, res, next) => {
  try {
    // Simulate an error
    throw new Error("Example error");
  } catch (error) {
    // Pass the error to the next middleware
    next(error);
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
