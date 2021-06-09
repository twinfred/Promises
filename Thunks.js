// Reference video: https://www.youtube.com/watch?v=EhyuWntGA8s

function DoSomething(task, effort) { // <-- This is the thunk
  console.log(`Started ${task}`);

  let data, thunkFunction;

  setTimeout(() => {
    data = `${task} completed`;
    
    if (thunkFunction) {
      thunkFunction(data);
    }
  }, effort);

  return function(cb) {
    if (data) {
      cb(data);
    } else {
      thunkFunction = cb;
    }
  }
}

const task1 = DoSomething('Task1', 2000);
const task2 = DoSomething('Task2', 1000);

task1(function(res) {
  console.log(res);

  task2(function(res) {
    console.log(res);
  });
});