var User = require("../register/register-model");
exports.blockUser = function(req, res) {
  data = req.body.email;

  User.findOneAndUpdate({ email: data }, { $set: { isVerified: false } })
    .then(function() {
      res.json({ msg: "User Access revoked" });
      // console.log(data);
    })
    .catch(function(e) {
      return e;
    });
};
