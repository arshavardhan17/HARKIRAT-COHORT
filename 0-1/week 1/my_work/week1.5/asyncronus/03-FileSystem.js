const fs = require("fs");
fs.readFile("./TextFile.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});

console.log("After reading file");

//output:
// After reading file
//hellow this is a text file file    (assyncronus operation)
