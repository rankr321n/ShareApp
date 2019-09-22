const userSchema = require('../UserServices/user-schema')
const mongoose = require("mongoose")
var userModel = mongoose.model("update", userSchema, "users");

module.exports = userModel