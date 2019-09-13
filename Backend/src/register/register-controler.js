var registerModel = require('./register-model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// var router = express.Router();

module.exports = {
    create: function (req, res, next) {

        registerModel.create({
                email: req.body.email,
                role: req.body.role,
                password: req.body.password
            },
            function (err, result) {
                if (err)
                    next(err);
                else
                    res.json({
                        status: "success",
                        message: "User added successfully!!!",
                        data: null
                    });

            });
    }
}

//router.post('/users',registerationControl);


// var handler = function (req, res) {
//     console.log(`[handler]`, req.body);

//     var data = new registerModel(req.body);

//     // var register = new registerModel(data);
//     data.save(function (err, user) {
//         if (err) {
//             console.log(`save`, err);

//             res.send(err);
//         }
//         console.log(`data`, user);

//         res.json(user);
//     });
// }



// router.post("/users", handler);



// module.exports = router