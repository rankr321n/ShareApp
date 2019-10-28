const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define Schema
let userSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    files: {
      type: Array
    }
  },
  {
    collection: "fileuploads"
  }
);

module.exports = mongoose.model("files", userSchema);
