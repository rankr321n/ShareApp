var jwt = require("jsonwebtoken");
var express = require("express");
var app = express();
const router = express.Router();
var registerModel = require("./register-model");
var mailsend = require("../../auth-token");

exports.signupPost = function(req, res, next) {
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

    const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "1hr" });

    registerModel.updateOne(
      { email: user.email },
      { $set: { token: token } },
      err => {
        if (err) {
          res.send(err);
        }
        mailsend.mailsender(user.email, token);
      }
    );
  });
};
//     // Send the email
//     var transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "username",
//         pass: "pass"
//       }
//     });
//     var mailOptions = {
//       from: "no-reply@email-confirmation.com",
//       to: user.email,
//       subject: "Account Verification Token",
//       text:
//         "Hello,\n\n" +
//         "Please verify your account by clicking the link: \nhttp://" +
//         // req.headers.host +
//         "/confirmation/" +
//         token +
//         ".\n"
//     };
//     transporter.sendMail(mailOptions, function(err, res) {
//       if (err) {
//         return err;
//       }
//       console.log(res);

//       res
//         .status(200)
//         .send("A verification email has been sent to " + user.email + ".");
//     });
//   });
// };
