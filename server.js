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

// Define API routes here
// app.get("/rentals", function(req, res) {
//   // Grab every document in the Articles collection
//   db.Rental.find({})
//     .then(function(dbRental) {
//       // If we were able to successfully find Articles, send them back to the client
//       res.json(dbRental);
//     })
//     .catch(function(err) {
//       // If an error occurred, send it to the client
//       res.json(err);
//     });
// });

// // Define API routes here
// app.post("/rentals/:id", (req, res) => {
//   db.Rental.create(req.body).then(function(rental) {
//     console.log("rental:", rental);
//     console.log("req.params", req.params);
//     return res
//       .json(rental)

//       .catch(function(err) {
//         console.log("in .catch");
//         // If an error occurs, send it back to the client
//         res.json(err);
//       });
//   });
// });
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// mongoose.connect(MONGODB_URI, function(err, db) {
//   if (err) {
//     console.log(
//       "Unable to connect to the server. Please start the server. Error:",
//       err
//     );
//   } else {
//     console.log("Connected to Server successfully!");
//   }
// });
// Connect to the Mongo DB

// mongoose.Promise = Promise;
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
