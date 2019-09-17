var mongoose = require("mongoose");

var termsSchema = new mongoose.Schema({
  terms: { type: String },
  aboutus: { type: String }
});
module.exports = termsSchema;
