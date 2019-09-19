var User = require("../register/register-model");
exports.unblockUser = function(req, res) {
  data = req.body.email;
  // console.log("data", data);

  User.findOneAndUpdate({ email: data }, { $set: { isVerified: true } })
    .then(function() {
      res.json({ msg: "User Access restored" });
      // console.log(data);
    })
    .catch(function(e) {
      return e;
    });
};
