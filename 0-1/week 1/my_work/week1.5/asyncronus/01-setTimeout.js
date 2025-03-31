// 1. setTimeout - It is a Web API provided by the browser. It schedules a task to be put on the event queue after a given amount of time.

//EXAMPLE-1
console.log("Before");
//called after 2 seconds
setTimeout(() => {
  console.log("Hello SetTimeout");
}, 2000);
console.log("After");

//EXAMPLE-2 ***************
function findsun(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  return ans;
}
function findSunTill100() {
  console.log(findsun(100));
}

setTimeout(findSunTill100, 2000); // 2 seconds
console.log("After");
