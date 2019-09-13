var mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const saltRounds = 10;
var registerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    role: {
        type: String,
        default: "user",
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
        expires: 43200
    }

});
// hash user password before saving into database
registerSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});
module.exports = registerSchema