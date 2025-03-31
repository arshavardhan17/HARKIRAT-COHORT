// It takes function and it keeps on repeating the task after the given amount of time.
//SYNTAX
//setInterval(FUNCTION, TIMEINTERVEL);

//EXAMPLE-1

const greet = () => {
  console.log("Hello World");
};
setInterval(greet, 2000); // 2 seconds

//EXAMPLE-2

setInterval(() => {
  console.log("Hello setInterval");
}, 2000);

// EXAMPLE-3
// 2. This will print 'Hello setInterval' every 2 seconds until and when cnt is greater than 5, it will stop the interval.
var cnt = 1;
const interval = setInterval(() => {
  console.log("Hello setInterval");
  cnt++;
  if (cnt > 5) {
    clearInterval(interval);
  }
}, 2000);
