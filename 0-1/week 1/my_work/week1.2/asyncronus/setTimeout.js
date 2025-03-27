// 1. setTimeout - It is a Web API provided by the browser. It schedules a task to be put on the event queue after a given amount of time.

//EXAMPLE-1

const greet = () => {
  console.log("Hello World");
};
setTimeout(greet, 2000); // 2 seconds

//EXAMPLE-2

console.log("Before");
//called after 2 seconds
setTimeout(() => {
  console.log("Hello SetTimeout");
}, 2000);
console.log("After");
