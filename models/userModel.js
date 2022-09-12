const mongoose = require("mongoose");
const { Schema } = mongoose;

const userModel = Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

const user = mongoose.model("user", userModel);

module.exports = user;
