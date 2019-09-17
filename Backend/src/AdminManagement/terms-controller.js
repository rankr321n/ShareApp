var termsModel = require("./terms-model");

exports.terms = function(req, res) {
  var data = req.body;

  var terms = new termsModel(data);
  termsModel
    .update(data)
    .then(function() {
      res.status(200).json({ msg: "Terms& Conditions Updated" });
    })
    .catch(function(e) {
      return res.send({ message: e.message });
    });
};
