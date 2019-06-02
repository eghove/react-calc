const router = require("express").Router();

// pull in the controller
const calcController = require("../controllers/calcController");


// api route

// matches with "api/calculator"
router.route("/all")
  .get(calcController.getAll);

router.route("/get10")
  .get(calcController.getTen);

router.route("/post")
  .post(calcController.storeCalc);


// export the router
module.exports = router;