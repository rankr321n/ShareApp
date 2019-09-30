var registerModel = require("../register/register-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const notifier = require('node-notifier');
module.exports = {
  authenticate:  function(req, res) {
   
    registerModel.findOne(
      {
        email: req.body.email
      },

      async function(err, user) {
        if (!user)
         {  notifier.notify('User is not registered with us');
           return (
             res.status(400).send({ msg: "User is not registered with us" })
          );
        }

        var isMatch =await bcrypt.compare(
          req.body.password,
          user.password
        );
        
        if(user && user.isVerified && isMatch!==null && isMatch==true){
         

          const payload = { id: user.id, email: user.email };
          const secretKey = "verify";
          const options = { issuer: "Randhir", expiresIn: "5h" };
          const logintoken = jwt.sign(payload, secretKey, options);
        const role=user.role
        ; 
         console.log(isMatch);
   
 
  let active = new registerModel({
  email: req.body.email,
  isloggedIn:req.body.isloggedIn
})
  registerModel.updateOne(
    { email: active.email },
    { $set: { isloggedIn: true } },
    (err)=>{console.log(err);
     })   
     res.status(201).json({logintoken,role})
     notifier.notify('Authentication Success'); 
}
 

    }

// res.json("Authentication Failure, Not a verified User")
// notifier.notify('Authentication Failure, Not a verified User');

    ).catch(err=>{

      return err
    }).catch(err=>{
      return err
    })}}