const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
    userID: {
        type: String,
        required: true,
        unique: true
    }
}, { collection: "users" });

module.exports = mongoose.model("User", UserSchema);
