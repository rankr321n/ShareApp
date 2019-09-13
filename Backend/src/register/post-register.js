var registerModel = require('./register-model')
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');

/**
 * POST /signup
 */
exports.signupPost = function (req, res, next) {

    
        // Make sure this account doesn't already exist
        registerModel.findOne({
                email: req.body.email
            }, function ( user) {
// console.log(user);

                // Make sure user doesn't already exist
                if (user) return res.status(400).send({
                    msg: 'The email address you have entered is already associated with another account.'
                })
            },
            registerModel.create({
                    email: req.body.email,
                    role: req.body.role,
                    password: req.body.password
                }),
                function (err,user) {
                    if (err)
                        next(err);
                    else
                  
                    
                        res.json({
                            status: "success",
                            message: "User added successfully!!!"
                        });
                        
                
    
            // Create a verification token for this user
            var token = new token({
                 token : jwt.sign({
                    id:user_id
                  },
                  'secretKey', {
                    expiresIn: '1h'
                  })
            });
        
            // Save the verification token
            token.save(function (err) {
                if (err) {
                    return res.status(500).send({
                        msg: err.message
                    },)}
                

                // Send the email
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'creativeengineer321@gmail.com',
                        pass:   'davnarela'                 
                     }
                });
                var mailOptions = {
                    from: 'no-reply@yourwebapplication.com',
                    to: user.email,
                    subject: 'Account Verification Token',
                    text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/confirmation\/' + token.token + '.\n'
                };
                transporter.sendMail(mailOptions, function (err) {
                    if (err) {
                        return res.status(500).send({
                            msg: err.message
                        });
                    }
                    res.status(200).send('A verification email has been sent to ' + user.email + '.');
                })
                });
            })
        }