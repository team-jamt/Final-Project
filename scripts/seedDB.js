const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/requests");

const requestSeed = [
  {
    user: "Tom",
    item: "saw",
    comments: "I need a saw",
    date: new Date(Date.now())
  },
  {
    user: "Tom",
    item: "Mower",
    comments: "I need a mower",
    date: new Date(Date.now())
  }
];

db.Request.remove({})
  .then(() => db.Request.collection.insertMany(requestSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
