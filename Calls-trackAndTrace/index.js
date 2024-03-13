//Call Stack:
// The call stack is a mechanism used by programming languages to keep track of function calls during the execution of a program.
// In a single-threaded environment, like JavaScript, the call stack maintains a record of the current execution context, which includes information about the functions being executed and their respective scope.
// Every time a function is called, a new frame is pushed onto the call stack, representing the execution context of that function.
// When a function returns or completes its execution, its corresponding frame is popped off the call stack, and control returns to the previous function in the stack.
// The call stack operates on a Last In, First Out (LIFO) basis, meaning the most recently added function is the first one to be executed and removed.


// Stack Trace:
// A stack trace is a report of the active stack frames at a specific point in time during the execution of a program.
// It provides a detailed list of function calls that have led to the current point of execution, typically including the function names, file paths, and line numbers.
// Stack traces are commonly used for debugging purposes to identify the sequence of function calls that led to an error or unexpected behavior in the program.
// In JavaScript, stack traces are often displayed in error messages when exceptions occur, helping developers pinpoint the location and cause of the error.
// Stack traces are also useful for understanding the flow of execution in complex applications and tracing the propagation of errors across asynchronous operations and callback functions.
// In summary, the call stack is a data structure that tracks the execution context of functions in a program, while the stack trace is a report that shows the history of function calls leading up to a particular point in the program's execution. Together, they play a crucial role in understanding and debugging the behavior of JavaScript programs.

// Function to track and trace calls
function trackAndTraceCalls(func) {
    return function (...args) {
      console.log(`Entering function: ${func.name}`);
      console.log(`Arguments: ${JSON.stringify(args)}`);
      
      // Capture stack trace
      const stackTrace = new Error().stack;
      console.log('Stack Trace:', stackTrace);
      
      // Call the original function
      const result = func.apply(this, args);
      
      console.log(`Exiting function: ${func.name}`);
      console.log('Result:', result);
      
      return result;
    };
  }
  
  // Example function to be tracked and traced
  function add(a, b) {
    return a + b;
  }
  
  // Wrap the original function with the tracking and tracing mechanism
  const trackedAdd = trackAndTraceCalls(add);
  
  // Call the tracked function
  const sum = trackedAdd(2, 3);
  console.log('Sum:', sum);

  

  //////////////////////////////////////--------------Advanced--------------/////////////////////////////



  // Function to track and trace calls using a Proxy
function createTrackedFunction(func) {
    return new Proxy(func, {
      apply: function(target, thisArg, argumentsList) {
        console.log(`Entering function: ${func.name}`);
        console.log(`Arguments: ${JSON.stringify(argumentsList)}`);
        
        // Capture stack trace
        const stackTrace = new Error().stack;
        console.log('Stack Trace:', stackTrace);
        
        // Call the original function
        const result = Reflect.apply(target, thisArg, argumentsList);
        
        console.log(`Exiting function: ${func.name}`);
        console.log('Result:', result);
        
        return result;
      }
    });
  }
  
  // Example function to be tracked and traced
  function add(a, b) {
    return a + b;
  }
  
  // Create a tracked version of the function using a Proxy
  const trackedAdd = createTrackedFunction(add);
  
  // Call the tracked function
  const sum = trackedAdd(2, 3);
  console.log('Sum:', sum);

  

// In this code:

// We define a function createTrackedFunction that takes another function as its argument and returns a Proxy object.
// Inside the Proxy object, we override the apply trap, which intercepts function calls.
// Within the apply trap, we log information about entering and exiting the function, including the function name, arguments, and stack trace.
// We capture the stack trace using new Error().stack.
// We call the original function using Reflect.apply(target, thisArg, argumentsList) to ensure the correct execution context and pass the arguments.
// Finally, we return the result of the original function.
// When you run this code, you'll see console output showing the tracing information for each function call, similar to the previous example. However, this method utilizes a Proxy object to intercept function calls, providing a more advanced and flexible approach to call tracking and tracing in JavaScript.