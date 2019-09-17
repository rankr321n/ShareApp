const termsSchema = require("./terms-schema");
const mongoose = require("mongoose");
var termsModel = mongoose.model("terms", termsSchema, "terms");

module.exports = termsModel;
