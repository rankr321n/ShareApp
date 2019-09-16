const sgMail = require("@sendgrid/mail");
require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: "rankr@yopmail.com", //receiver's email
  from: "test@example.com", //sender's email
  subject: "I think its working", //Subject
  text: "and finally  i can send email from sendgrid", //content
  html: "Authentication" //HTML content
};
sgMail.send(msg);
