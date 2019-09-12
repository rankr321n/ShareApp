const registerSchema = require('../register/register-schema')
const mongoose = require("mongoose")
var registerModel = mongoose.model("users", registerSchema, "users");

module.exports = registerModel