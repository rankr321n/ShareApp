var registerModel = require('../register/register-model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {

  authenticate: function (req, res, next) {
    registerModel.findOne({
      email: req.body.email
    }, async function (err, user) {


      if (err) {
        next(err);
      } else {
        const isMatch = await bcrypt.compare(req.body.password, user.password);


        if (isMatch) {
          const token = jwt.sign({
              id: user._id
            },
            'secretKey', {
              expiresIn: '1h'
            });
          res.json({
            status: "success",
            message: "user found!!!",
            // token: token,
            data: {
              user: user._id,
              token: token
            }
          });
        } else {
          res.json({
            status: "error",
            message: "Invalid email/password!!!",
            data: null
          });
        }
      }
    });
  }
  // },
  // validateUser: function (req, res, next) {
  //   jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function (err, decoded) {
  //     if (err) {
  //       res.json({
  //         status: "error",
  //         message: err.message,
  //         data: null
  //       });
  //     } else {
  //       // add user id to request
  //       req.body._id = decoded.id;
  //       next();
  //     }
  //   });

  // }

}
























// var router = express.Router();
// var handler = function (req, res) {
//     registerModel
//         .find({
//             email: req.body.email
//         })
//         .then(function (users) {
//             return res.send(users);
//         })
//         .catch((e) => {
//             console.log(e);
//         })
// }
// router.post("/users", handler);

// module.exports = router