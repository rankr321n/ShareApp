var jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");

//create json webtoken

exports.confirmUser = function(err) {
  if (err) {
    return;
  } else {
    const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "5m" });
    registerModel.update({ email: user.email }, { $set: { token: token } });

    // Send the email
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "creativeengineer321@gmail.com",
        pass: "davnarela"
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

    transporter.sendMail(mailOptions, function(err, res) {
      if (err) {
        return res.status(500).send({
          msg: err.message
        });
      }
      res
        .status(200)
        .send("A verification email has been sent to " + user.email + ".");
    });
  }
};
