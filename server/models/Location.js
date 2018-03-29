const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LocationSchema = Schema({
    userID: {
        type: String,
        required: true,
        unique: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
}, { collection: "locations" });

module.exports = mongoose.model("Location", LocationSchema);
