var mongoose = require("mongoose");
require("mongoose-type-email");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var registerSchema = new mongoose.Schema({
    email: {
        // type:mongoose.SchemaTypes.Email,
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    role: {
        type: String,
        immutable: true
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
        default: Date.now
    },

    logintoken: { type: String },

    isloggedIn: { type: Boolean, required: true, default: false },
    registertoken: { type: String }
});
// hash user password before saving into database
registerSchema.pre("save", function(next) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});
module.exports = registerSchema;