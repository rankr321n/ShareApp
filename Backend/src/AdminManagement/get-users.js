var user = require("../register/register-model");
exports.getUser = function(req, res) {
  var data = req.body;
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
