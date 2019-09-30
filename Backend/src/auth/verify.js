const jwt = require("jsonwebtoken");
const notifier = require('node-notifier');
module.exports = (req, res, next) => {

  // console.log("M token verify karunga");
  
  // console.log("TOken",req.headers.authorization);
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized request");
  }
  const token = req.headers.authorization.split(" ")[1];
  // console.log("token",token);


  if (token === "null") {
    notifier.notify('Please Login');
    return res.status(401).send("Unauthorized request");
  }
  const payload = jwt.verify(token, "verify", (err, resp) => {
    if (err) {
      console.log("err", err.message);
     
      notifier.notify('Please Login Again, Your Session Expired');
      // return
      return res.json({message:"Authentication Failure"});
    }
    // console.log("res", res);
    // console.log("MIDDLEWARE",req.params.filename);
    
    req.email = resp.email;
    req._id = resp.id;
  
    next();
  });
};

  
// const jwt = require("jsonwebtoken");

// module.exports = (req, res, err,next) => {
//   // console.log(req.headers.authorization);
//   if (!req.headers.authorization) {
//     return res.status(401).send("Unauthorized request");
//   }
//   const token = req.headers.authorization.split(" ")[1];
//   // console.log(token);
//   if (token === "null") {
//     return res.status(401).send("Unauthorized request");
//   }
//   const payload = jwt.verify(token, "verify") 
//     if (err) {
//       // console.log("err", err);
//       return res.status(401).send("Unauthorized request");
//     }
//     // console.log("res", res);
//     req.email = res.email;
//     req._id = res.userId;
//     next();
//   };
