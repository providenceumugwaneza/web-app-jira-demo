const express = require("express");
const app = express();

// Current route
app.get("/", (req, res) => {
  res.send("Welcome to my /our new homepage!");
});

// New route
app.get("/about", (req, res) => {
  res.send("About Page: This is information about our web app.");
});

// Start the server
app.listen(3000, () => {
  console.log("Server on running on http://localhost:3000");
});

