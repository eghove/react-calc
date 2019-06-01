const mongoose = require("mongoose");
const db = require("../models");

// this file empties out the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactcalc"
);

// the seeds
const calcSeed = [
  {
    num1: 15.2,
    num2: 17,
    operator: "add"
  }
]

db.Calculator
  .remove({})
  .then(() => db.Calculator.collection.insertMany(calcSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });