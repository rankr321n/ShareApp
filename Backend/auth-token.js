require("dotenv").config();
exports.mailsender = function(email, token) {
  const sgMail = require("@sendgrid/mail");
  // console.log(email, token);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: email,
    from: "no-reply@randhir.ca",
    subject: "Please verify your account to continue",
    text:
      "Hello,\n\n" +
      "Please verify your account by clicking the link: \nhttp://" +
      token +
      ".\n"
    // html: "<strong>TOKEN</strong>"
  };
  sgMail.send(msg);

  // console.log(process.env.SENDGRID_API_KEY);
};
