var express = require("express");
var router = express.Router();
const { check } = require("express-validator");

const { homepage, signup, signin } = require("../controllers/indexControllers");

/**
 * @route /
 * @description opens the homepage
 * @access Public
 */
router.get("/", homepage);

/**api POST /signup */
router.post("/signup", signup);

/**api POST /signin */
router.post("/signin", signin);

module.exports = router;
