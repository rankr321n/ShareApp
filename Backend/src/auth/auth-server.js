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
            
            data: {
              user: user._id,
              token: token
            }
          });
        } 
        
        else {
          res.json({
            status: "error",
            message: "Invalid email/password!!!",
            data: null
          });
        }
      }
    });
  }
  

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