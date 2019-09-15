const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: "randhirkumarshah@gmail.com", //receiver's email
  from: "test@example.com", //sender's email
  subject: "I think its working", //Subject
  text: "and finally  i can send email from sendgrid", //content
  html: "and easy to do anywhere, even with Node.js" //HTML content
};
sgMail.send(msg);
