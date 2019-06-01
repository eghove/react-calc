// pull in the models
const db = require("../models");

module.exports = {
  getAll: function (req, res) {
    db.Calculator.find()
      .then(dbResults => res.json(dbResults))
      .catch(err => res.status(422).json(err));
  }
}