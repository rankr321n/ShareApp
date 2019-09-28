var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  image: { type: String },
    username: { type: String },
    twitter: { type: String },
    linkedin: { type: String },
    
    firstname: { type: String/* , required: true  */},
    lastname: { type: String/* , required: true  */},
    // email: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    // },
       
    mobile: { type: Number, required: true },
    sentRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    receivedRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
});

module.exports = userSchema;