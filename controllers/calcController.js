// pull in the models
const db = require("../models");

module.exports = {
  getAll: function (req, res) {
    db.Calculator.find()
      .then(dbResults => res.json(dbResults))
      .catch(err => res.status(422).json(err));
  },

  getTen: function (req, res) {
    db.Calculator.find()
      .sort( {calcCreated: -1} )
      .limit(10)
      .then(dbResults => res.json(dbResults))
      .catch(err => res.status(422).json(err));
  },

  storeCalc: function (req, res) {
    db.Calculator.create({
      num1: req.body.num1,
      num2: req.body.num2,
      operator: req.body.operator,
      calcCreated: Date.now()
    })
      .then(dbResults => res.json(dbResults))
      .catch(err => res.status(422).json(err));

  }
}