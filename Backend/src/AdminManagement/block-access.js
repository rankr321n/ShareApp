var User = require("../register/register-model");
const notifier = require('node-notifier');

exports.blockUser = function(req, res) {
  data = req.body.email;

  User.findOneAndUpdate({ email: data }, { $set: { isVerified: false } })
    .then(function() {

      res.json({ msg: "User Access revoked" });
      notifier.notify('User Acess has been revoked');
    })
    .catch(function(e) {
      return e;
    });
};
