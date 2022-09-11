var express = require("express");
var router = express.Router();

const { homepage } = require("../controllers/indexControllers");

/**
 * @route /
 * @description opens the homepage
 * @access Public
 */
router.get("/", homepage);

module.exports = router;
