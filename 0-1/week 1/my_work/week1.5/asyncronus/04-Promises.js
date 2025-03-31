//read slides
// promices are introduced to get rid of callbacks

const fs = require("fs");

function KiratsReadFile() {
  return new Promise((resolve, reject) => {
    fs.readFile("./TextFile.txt", "utf-8", (err, data) => {
      if (err) {
        reject("Error reading file:", err);
      }
      resolve(data);
    });
  });
}
//callback function to call when the promise is resolved or rejected
function onDone(data) {
  console.log("File content:", data);
}
function onError(err) {
  console.log(err);
}
//calling the function
KiratsReadFile()
  .then(onDone) //onDone will be called when the promise is resolved
  .catch(onError); //onError will be called when the promise is rejected
