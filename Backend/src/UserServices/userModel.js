const userSchema = require('../UserServices/user-schema')
const mongoose = require("mongoose")
var User = mongoose.model("User", userSchema, "users");

module.exports = User