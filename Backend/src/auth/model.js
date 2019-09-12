const loginSchema = require('./schema');
const mongoose = require("mongoose")

var loginModel = mongoose.model("login", loginSchema, "login");

module.exports =
    loginModel