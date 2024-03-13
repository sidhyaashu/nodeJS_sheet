console.log("Start");

setImmediate(() => {
  console.log("This will run in the next event 1 cycle");
});

setImmediate(() => {
  console.log("This will run in the next event 2 cycle");
});
setImmediate(() => {
  console.log("This will run in the next event 3 cycle");
  setImmediate(() => {
    console.log("This will run in the next event 4 cycle");
    setImmediate(() => {
      console.log("This will run in the next event 5 cycle");
    });
  });
});

console.log("End");

setImmediate(() => {
  console.log("This will run in the next event 6 cycle");
});
