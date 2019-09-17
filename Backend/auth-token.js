require("dotenv").config();
exports.mailsender = function(email, token) {
  const sgMail = require("@sendgrid/mail");
  // console.log(email, token);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: email,
    from: "welcome@shareapp.com",
    subject: "Please verify your account to continue",
    templateId: "d-b0c42dc916994db28f4319bbe99dddb2"
    // text:
    //   "Hello,\n\n" +
    //   "Please verify your account by clicking the link: \nhttp://" +
    //   token +
    //   ".\n"
    // // html: "<strong>TOKEN</strong>"
  };
  sgMail.send(msg);
};
