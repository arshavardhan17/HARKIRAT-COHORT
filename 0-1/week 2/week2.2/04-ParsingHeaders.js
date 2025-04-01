//for express to get json body data we need to use body-parser middleware

const express = require("express");
const app = express();
const port = 3000;

app.post("/submit", (req, res) => {
  console.log(req.headers.message); // to access the data sent in the request body
  res.send("Data received");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
