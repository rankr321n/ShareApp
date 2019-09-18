var User = require("../register/register-model");
exports.blockUser = function(req, res) {
  data = req.body.email;

  // User.findOne({ email: data }, function(err, user) {
  //   if (!user.isVerified) {
  //     res.json({ msg: "user is already Blocked" });
  //   }

  User.updateOne({ email: data }, { $set: { isVerified: false } })
    .then(function() {
      res.json({ msg: "User Access revoked" });
    })
    .catch(function(e) {
      return e;
    });
};
