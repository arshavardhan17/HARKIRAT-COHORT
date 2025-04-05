const express = require("express");
const app = express();

const requests = 0;
const countRequests = (req, res, next) => {
  requests++;
  console.log(`Total requests: ${requests}`);
  next();
};

app.get("/health-checkup", countRequests, (req, res) => {
  // Do health check here
});
app.get("/kidney-checkup", countRequests, (req, res) => {
  // Do kidney check here
});
app.get("/heart-checkup", countRequests, (req, res) => {
  // Do heart check here
});
