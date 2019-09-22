var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  image:{  type: Array },
  username:{ type: String },
  firstname:{ type: String },
  lastname:{ type: String },
  email:{type:String},
  twitter:{ type: String },
  linkedin:{ type: String },
  sentRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  receivedRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
})

module.exports = userSchema;