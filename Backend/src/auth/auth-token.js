const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);
const msg = {
  to: "rankr@yopmail.com", //receiver's email
  from: "test@example.com", //sender's email
  subject: "I think its working", //Subject
  text: "and finally  i can send email from sendgrid", //content
  html: "and easy to do anywhere, even with Node.js" //HTML content
};
sgMail.send(msg);
