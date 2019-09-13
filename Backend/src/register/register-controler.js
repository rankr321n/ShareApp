var registerModel = require('./register-model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// var router = express.Router();

module.exports = {

    create: function (req, res, next) {
        // Make sure this account doesn't already exist
        registerModel.findOne({
                email: req.body.email
            }, function (err, user) {

                // Make sure user doesn't already exist
                if (err) return res.status(400).send({
                    msg: 'The email address you have entered is already associated with another account.'
                })
            },
            registerModel.create({
                    email: req.body.email,
                    role: req.body.role,
                    password: req.body.password
                },
                function (err) {
                    if (err)
                        next(err);
                    else
                        res.json({
                            status: "success",
                            message: "User added successfully!!!"
                        });

                }));
    }
}