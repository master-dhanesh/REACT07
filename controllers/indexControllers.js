const User = require("../models/userModel");

const { validationResult } = require("express-validator");

exports.homepage = (req, res, next) => {
    res.status(200).json({ message: "Welcome to homepage" });
};

exports.signup = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.json(errors.errors);
            return;
        }
        const { username, email, password } = req.body;
        const newUser = new User({ username, email, password });
        const createdUser = await newUser.save();
        res.status(201).json(createdUser);
    } catch (err) {
        res.status(500).json(err);
    }
};
