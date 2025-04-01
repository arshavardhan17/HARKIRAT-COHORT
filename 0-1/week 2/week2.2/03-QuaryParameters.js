//for express to get json body data we need to use body-parser middleware

//Example: 1

const express = require("express");
const app1 = express();
function sum(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans += i;
  }
  return ans;
}
app1.get("/", function (req, res) {
  const n = req.query.n;
  const ans = sum(n);
  res.send("Hi There Sum is: " + ans);
});

app1.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// open browser - localhost:3000/?n=20  (after ? - there is query parameters)

//Example: 2
const express = require("express");
const app = express();
const port = 3000;

app.post("/submit", (req, res) => {
  console.log(req.query.message);
  res.send("Data received");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//URL: http://localhost:3000/submit?message=hello%20world
