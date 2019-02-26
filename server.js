const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
//tom stuff
const mongoose = require("mongoose");
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/requests";
// Require all models
// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/items",
  function (err, db) {
    if (err) {
      console.log(
        "Unable to connect to the server. Please start the server. Error:",
        err
      );
    } else {
      console.log("connected to item database successfully!");
    }
  }
)


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
