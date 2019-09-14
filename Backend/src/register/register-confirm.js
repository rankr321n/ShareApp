var jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");
var registerModel = require("./register-model");

require("dotenv").config({ path: "../../.env" });

exports.signupPost = function(req, res, next) {
  registerModel.findOne(
    {
      email: req.body.email
    },
    function(user) {
      // Make sure user doesn't already exist
      if (user) {
        res.status(400).send({
          msg:
            "The email address you have entered is already associated with another account."
        });
      }
    }
  );

  let user = new registerModel({
    email: req.body.email,
    password: req.body.password
  });

  user.save(function(err, user) {
    if (err) {
      res.status(500);
    } else
      res.status(200).json({
        status: "success",
        message: "User added successfully!!!"
      });

    //create json webtoken

    const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "1hr" });

    registerModel.updateOne(
      { email: user.email },
      { $set: { token: token } },
      (err, doc) => {
        if (err) {
          console.log(err);
        }
        console.log(doc);
      }
    );

    // Send the email
    var transporter = nodemailer.createTransport({
      service: "Sendgrid",
      auth: {
        user: process.env.SENDGRID_USERNAME,
        pass: process.env.SENDGRID_PASSWORD
      }
    });
    var mailOptions = {
      from: "creativeengineer321@gmail.com",
      to: user.email,
      subject: "Account Verification Token",
      text:
        "Hello,\n\n" +
        "Please verify your account by clicking the link: \nhttp://" +
        // req.headers.host +
        "/confirmation/" +
        token +
        ".\n"
    };
    transporter.sendMail(mailOptions, function(err, info) {
      if (err) {
        // return res.status(500).send({
        //   msg: err.message
        // });
        return;
      }
      console.log(info);

      // res
      //   .status(200)
      //   .send("A verification email has been sent to " + user.email + ".");
    });
  });
};
