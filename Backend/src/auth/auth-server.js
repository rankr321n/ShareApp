var registerModel = require("../register/register-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  authenticate: function(req, res, next) {
    registerModel.findOne(
      {
        email: req.body.email
      },

      async function(err, user) {
        if (!user)
          return (
            err, res.status(400).send({ msg: "We were unable to find a user." })
          );
        else {
          const isMatch = await bcrypt.compare(
            req.body.password,
            user.password
          );

          if (isMatch && !user.isVerified) {
            const payload = { id: user.id, role: user.role };
            const secretKey = "!wRaPcoDe";
            const options = { issuer: "Randhir", expiresIn: "1m" };
            const logintoken = jwt.sign(payload, secretKey, options);

            registerModel.updateOne(
              { email: user.email },
              { $set: { logintoken: logintoken } },
              err => {
                if (err) {
                  return err;
                }
              }
            );
          }
          res.status(401).send({ msg: "User is not verified" });
        }
      }
    );
  }
};
