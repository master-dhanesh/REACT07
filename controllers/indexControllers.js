const User = require("../models/userModel");

exports.homepage = (req, res, next) => {
    res.status(200).json({ message: "Welcome to homepage" });
};

exports.signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ username, email, password });
        const createdUser = await newUser.save();
        res.status(201).json(createdUser);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

exports.signin = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username })
            .select("+password")
            .exec();
        const result = await user.comparepassword(user.password);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err.message);
    }
};
