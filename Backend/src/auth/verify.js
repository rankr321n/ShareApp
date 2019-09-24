const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {

  // console.log("M token verify karunga");
  
  console.log(req.headers.authorization);
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized request");
  }
  const token = req.headers.authorization.split(" ")[1];
  // console.log("token",token);
  if (token === "null") {
    return res.status(401).send("Unauthorized request");
  }
  const payload = jwt.verify(token, "verify", (err, res) => {
    if (err) {
      console.log("err", err.message);
      // console.log(process.env.JWT_KEY);
      
      return res.status(401).send("Unauthorized request");
    }
    // console.log("res", res);
    req.email = res.email;
    req._id = res.id;
    next();
  });
};