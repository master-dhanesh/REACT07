const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userModel = Schema({
    username: {
        type: String,
        unique: true,
        required: [true, "username required!"],
        minlength: [4, "Username must be 4 characters long."],
    },
    password: {
        type: String,
        select: false,
        required: [true, "Password required"],
        minlength: [6, "Password must be 6 characters long."],
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        validate: [validator.isEmail, "Invalid email"],
    },
});

userModel.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userModel.methods.comparepassword = async function (userpassword) {
    console.log(userpassword);
    return await bcrypt.compare(userpassword, this.password);
};

const user = mongoose.model("user", userModel);

module.exports = user;
