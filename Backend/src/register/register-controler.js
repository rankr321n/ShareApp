var express = require('express')
var registerModel = require('./register-model')


var router = express.Router();


var handler = function (req, res) {
    console.log(`[handler]`, req.body);

    var data = new registerModel(req.body);

    // var register = new registerModel(data);
    data.save(function (err, user) {
        if (err) {
            console.log(`save`, err);

            res.send(err);
        }
        console.log(`data`, user);

        res.json(user);
    });
}



router.post("/users", handler);



module.exports = router