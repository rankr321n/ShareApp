var mongoose = require('mongoose')
var registerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        default: "user"
    },
    password: {
        type: String,
        required: true
    }

});

module.exports = registerSchema