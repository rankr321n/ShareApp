var express = require('express')
var registerModel = require('../register/register-model')


var router = express.Router();


var handler = function (req, res) {
    registerModel
        .find({
            email: req.body.email
        })
        .then(function (users) {
            return res.send(users);
        })
        .catch((e) => {
            console.log(e);
        })
}
router.post("/users", handler);

module.exports = router