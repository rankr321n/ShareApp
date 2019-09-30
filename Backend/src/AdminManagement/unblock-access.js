var User = require("../register/register-model");
const notifier = require('node-notifier');
exports.unblockUser = function(req, res) {
  data = req.body.email;
  // console.log("data", data);

  User.findOneAndUpdate({ email: data }, { $set: { isVerified: true } })
    .then(function() {
      res.json({ msg: "User Access restored" });
      notifier.notify('User Access restored');
    })
    .catch(function(e) {
      return e;
    });
};
