//for express to get json body data we need to use body-parser middleware

const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true })); // to parse urlencoded data
app.use(bodyParser.json()); // to parse json data

app.post("/submit", (req, res) => {
  console.log(req.body); // to access the data sent in the request body
  res.send("Data received");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
