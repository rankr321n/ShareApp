var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    // image: { type: Array },
    username: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String },
    twitter: { type: String },
    linkedin: { type: String }
    // sentRequests: [{ type: Array }],
    // receivedRequests: [{ type: Array }],
    // friends: [{ type: Array }]
});

module.exports = userSchema;