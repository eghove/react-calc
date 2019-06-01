const router = require("express").Router();

// pull in the controller
const calcController = require("../controllers/calcController");


// api route

// matches with "api/calculator"
router.route("/all")
  .get(calcController.getAll);


// export the router
module.exports = router;