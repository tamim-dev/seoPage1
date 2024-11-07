const mongoose = require("mongoose");

function dbConnection() {
    mongoose
        .connect(
            `mongodb+srv://tamim59:e8yZM2fADBWPsrCm@cluster0.cyb0k19.mongodb.net/seoPage1?retryWrites=true&w=majority`
        )
        .then(() => console.log("Database Connected!"));
}

module.exports = dbConnection;
