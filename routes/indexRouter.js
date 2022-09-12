var express = require("express");
var router = express.Router();
const { check } = require("express-validator");

const { homepage, signup } = require("../controllers/indexControllers");

/**
 * @route /
 * @description opens the homepage
 * @access Public
 */
router.get("/", homepage);

/**api POST /signup */
router.post(
    "/signup",
    [
        check("username", "username have atleast 4 characters").isLength({
            min: 4,
        }),
        check("password", "password have atleast 6 characters").isLength({
            min: 6,
        }),
        check("email", "Invalid email").isEmail(),
    ],

    signup
);

module.exports = router;
