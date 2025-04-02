const express = require("express");
const app = express();

var users = [
  {
    name: "John",
    kidney: [
      {
        health: "False",
      },
    ],
  },
];

// Middleware to parse JSON body
app.use(express.json()); // to parse json data

app.get("/", (req, res) => {
  const JohnKidney = users[0].kidney;
  const numberOfKidneys = JohnKidney.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < numberOfKidneys; i++) {
    if (JohnKidney[i].health == "True") {
      numberOfHealthyKidneys++;
    }
  }
  let numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfHealthyKidneys: numberOfHealthyKidneys,
    numberOfUnhealthyKidneys: numberOfUnhealthyKidneys,
    numberOfKidneys, // we can avoid: numberOfKidneys: numberOfKidneys if we have same words
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidney.push({ health: isHealthy });
  res.json({ message: "Kidney health status updated successfully" });
});

app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidney.length; i++) {
    users[0].kidney[i].health = true;
  }
  res.json({ message: "updated every kidney to healthy" });
});

app.delete("/", (req, res) => {
  const newKidney = [];
  for (let i = 0; i < users[0].kidney.length; i++) {
    if ((users[0].kidney[i].health = false)) {
      newKidney.push(users[0].kidney[i]);
    }
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
