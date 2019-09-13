 // Send the email
 const nodemailer=require('nodemailer')
 var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'creativeengineer321@gmail.com',
        pass: 'davnarela'
    }
});
var mailOptions = {
    from: 'no-reply@randhir.com',
    to: 'dav.randhir@gmail.com',
    subject: 'Account Verification Token',
    text:'hi this is email'
    // text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/confirmation\/' + token.token + '.\n'
};
transporter.sendMail(mailOptions, function (err) {
    if (err) {
        console.log("error");
        
    }else{
   console.log("MAIL SENT");
   
}
})