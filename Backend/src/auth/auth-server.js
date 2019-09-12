var express = require('express')
var loginModel = require('./model')

var router = express.Router();

var handler = function (req, res) {
    loginModel
        .find()
        .then(function (users) {
            return res.send(users);
        })["catch"](function (e) {
            return res.send({
                message: e.message
            });
        });
}

router.get("/login", handler);

module.exports = router