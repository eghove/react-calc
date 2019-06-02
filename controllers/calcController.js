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
    db.Calculator.create(req.body)
      .then(dbResults => res.json(dbResults))
      .catch(err => res.status(422).json(err));

  }
}