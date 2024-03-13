//---------=================-----------=========Another process========-------------=============
console.log('Start');

process.nextTick(() => {
  console.log('Inside nextTick');
});

console.log('End');



//---------=================-----------=========Another process========-------------=============
function asyncOperation(callback) {
    // Simulating asynchronous operation
    setTimeout(() => {
        callback();
    }, 1000);
}

console.log("Start");

asyncOperation(() => {
    console.log("Async operation completed");
});

console.log("End");

//---------=================-----------=========Another process========-------------=============
console.log('Start');

asyncOperation(() => {
  console.log('Async operation completed');
});

process.nextTick(() => {
  console.log('Code after async operation');
});

console.log('End');
