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
        res.json("User already exists" );
      }
    }
  );

  let user = new registerModel({
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
  });

  user.save(function(err) {
    if (err) {
      res.status(500);
    } else
      res.status(200).json("User added successfully and verification mail sent"
      );

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
      }
    );
  });
};
