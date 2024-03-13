const myPromise = new Promise((resolve, reject) => {
  // Perform some asynchronous operation
  setTimeout(() => {
    // Assuming the operation is successful
    resolve("Operation completed successfully");
  }, 2000);
});

myPromise
  .then((result) => {
    console.log(result); // Output: Operation completed successfully
  })
  .catch((error) => {
    console.error(error);
  });

//---------=============----------============Promises Chaining========-------------=============---------
someAsyncOperation()
  .then((result) => {
    return anotherAsyncOperation(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });
