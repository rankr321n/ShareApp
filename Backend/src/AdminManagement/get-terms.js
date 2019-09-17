var termsModel = require("./terms-model");

exports.getTerms = function(req, res) {
  var data = req.body;
  termsModel
    .find()
    .then(function(data) {
      return res
        .send(data)
        .status(200)
        .json({ msg: "Terms" });
    })
    .catch(function(e) {
      return e;
    });
};
