var jwt = require("jsonwebtoken");

var registerModel = require("./register-model");
var mailsend = require("../../auth-token");

exports.signupPost = function(req, res) {
  registerModel.findOne(
    {
      email: req.body.email
    },
    function(err, user) {
      // Make sure user doesn't already
      if (err) {
        return;
      }
      if (user) {
        res.status(401).json({ status: "User already exists" });
      }
    }
  );

  let user = new registerModel({
    email: req.body.email,
    password: req.body.password
  });

  user.save(function(err) {
    if (err) {
      res.status(500);
    } else
      res.status(200).json({
        status: "success",
        message: "User added successfully!!!"
      });

    //create json webtoken

    const registertoken = jwt.sign({ id: user._id }, "secret", {
      expiresIn: "1hr"
    });

    registerModel.updateOne(
      { email: user.email },
      { $set: { registertoken: registertoken } },
      err => {
        if (err) {
          res.send(err);
        }
        mailsend.mailsender(user.email, registertoken);
        res.status.json({ msg: "Email sent" });
      }
    );
  });
};
