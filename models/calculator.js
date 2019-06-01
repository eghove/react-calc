const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const calculatorSchema = new Schema({
  num1: [{type:  Number, required: true}],
  num2: [{type: Number, required: true}],
  operator: [{type: String, required: true}]
});

const Calculator = mongoose.model("Calculator", calculatorSchema);

module.exports = Calculator;
