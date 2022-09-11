const mongoose = require("mongoose");

exports.databaseconnection = () => {
    try {
        mongoose.connect(process.env.MONGODB_URL);
        console.log("CONNECTION ESTABLISHED");
    } catch (err) {
        console.log("DATABASE ERROR >> ", err.message);
    }
};
