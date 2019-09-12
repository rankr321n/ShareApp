var mongoose = require('mongoose')
var loginSchema = new mongoose.Schema({
    username: String,
    password: String
});

module.exports =
    loginSchema