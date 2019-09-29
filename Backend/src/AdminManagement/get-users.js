var user = require("../UserServices/userModel");
exports.getUser = function(req, res) {
  user
    .find()
    .then(function(data) {

      return res
        .send(data)
        .status(200)
        .json({ msg: "Users" });
    })
    .catch(function(e) {
      return e;
    });
};
