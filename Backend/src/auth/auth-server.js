var registerModel = require("../register/register-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  authenticate: function(req, res) {
    // console.log("Auth server");
    
    registerModel.findOne(
      {
        email: req.body.email
      },

      async function(err, user) {
        if (!user)
          return (
             res.status(400).send({ msg: "User is not registered with us" })
          );
        else {
         
          
          const isMatch = await bcrypt.compare(
            req.body.password,
            user.password
          );
          const payload = { id: user.id, email: user.email };
          const secretKey = "verify";
          const options = { issuer: "Randhir", expiresIn: "1h" };
          const logintoken = jwt.sign(payload, secretKey, options);
        const role=user.role
         
         


         if(user.isVerified&&isMatch&&role)
{

  res.status(201).json({logintoken,role})

}         
          
            // res.status(401).json("You are unverified")
          
        
        
        
        }})}}