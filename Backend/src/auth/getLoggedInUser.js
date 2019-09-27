const User = require("../UserServices/userModel");

exports.get_loggedIn_user = (req, res, next) => {
  const userEmail = req.email;
  User.findOne({ email: userEmail })
    .populate("receivedRequests friends sentRequests")
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(404).send("user not found");
      }
      const response = {
        username:user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
       
        role: user.role,
        friends: user.friends,
        receivedRequests: user.receivedRequests,
        sentRequests: user.sentRequests,
        _id: user._id
      };
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(404).json({
        error: err
      });
    });
};