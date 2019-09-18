var User = require("../register/register-model");
exports.blockUser =async function(req, res) {
  data = req.body.email;
  // console.log("data", data);
  // User.findOne({ email: data }, function(err, user) {
  //   if (!user.isVerified) {
  //     res.json({ msg: "user is already Blocked" });
  //   }

  User.findOneAndUpdate({ email: data }, { $set: { isVerified: false } })
    .then(function() {
      res.json({ msg: "User Access revoked" });
      console.log(data);
    })
    .catch(function(e) {
      return e;
    });
};
