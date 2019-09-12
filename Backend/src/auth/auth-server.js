var registerModel = require('../register/register-model')
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');

module.exports={
    
    authenticate: function (req, res, next) {
    registerModel.findOne({email:req.body.email}, function(err, userInfo){
       if (err) {
        next(err);
       } 
       else {
  if(bcrypt.compareSync(req.body.password, userInfo.password)) {
  const token = jwt.sign({id: userInfo._id},
 req.app.get('secretKey'), { expiresIn: '1h' });
  res.json({status:"success", message: "user found!!!", data:{user: userInfo, token:token}});
  }
  else{
  res.json({status:"error", message: "Invalid email/password!!!", data:null});
  }
       }
      });
   
    }}
























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