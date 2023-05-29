const mongoose = require("mongoose");

function dbConnection() {
    const dbUrl = process.env.MONGO_URL;

    mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection;

    db.on("error", console.error.bind(console, "Connection error"));
    db.once("open", function () {
        console.log("Database connected successfully");
    });
}

module.exports = dbConnection;