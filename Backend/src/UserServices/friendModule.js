const User = require("./userModel");
// exports.get_friend = (req, res, next) => {
//     if (req.body.email === null) {
//       return res.status(400).send("Please Enter Email Address");
//     } else if (req.email === req.body.email) {
//       return res.status(400).send("You can not send Request to yourself");
//     } else {
//       User.findOne({ email: req.body.email })
//         .populate("receivedRequests friends sentRequests")
//         .select("firstname lastname email _id mobile")
//         .exec()
//         .then(user => {
//           if (user.length < 1) {
//             return res.status(404).send("Not a Registered User");
//           }
  
//           alreadyFriend = false;
  
//           for (af of user.friends) {
//             if (af._id == req._id) {
//               alreadyFriend = true;
//               return res.status(401).send("We Are Already Friends");
//             }
//           }
//           if (!alreadyFriend) {
//             res.status(200).send(user);
//           }
//         })
//         .catch(err => {
//           return res.status(500).send("Not a Registered User");
//         });
//     }
//   };
  
  exports.post_friend_request = (req, res, next) => {
    // console.log(req.body.email, req._id);

    if (req.email === req.body.email) {
            return res.status(404).send("You can not send Request to yourself")
            
          }
    User.findOne({ email:req.body.email,id:req.body.id })
      .populate("receivedRequests friends sentRequests")
      .exec()
      .then(friend => {
        alreadySent = false;
        // console.log(friend)
        for (f of friend.receivedRequests) {
          if (f.email === req.email) {
            alreadySent = true;
            return res.status(400).send("Request Already Sent");
          }}
        
        if (alreadySent === false) {
          User.updateOne(
            { _id: friend._id },
            {
              $push: { receivedRequests: req._id }
            }
          ).then(friendUpdated => {
            // console.log("Friend Updated and request Id stored.");
            User.findOne({ _id: req._id })
              .populate("receivedRequests friends sentRequests")
              .exec()
              .then(user => {
                User.updateOne(
                  { _id: user._id },
                  {
                    $push: { sentRequests: friend._id }
                  }
                )
                  .then(userUpdated => {
                    const response = {
                      firstname: friend.firstname,
                      lastname: friend.lastname,
                      email: friend.email,
                      
                    };
                    res.status(200).send(response);
                  })
                  .catch(err => {
                    return res.status(400).send("Request Could Not Sent.");
                  });
              });
          });
        }
      });
  };
  
  exports.post_accept_friend_requests = (req, res, next) => {
    // console.log(req._id);
    User.findById(req._id)
      .exec()
      .then(user => {
        
        User.updateOne(
          { _id: user._id },
          { $pull: { receivedRequests: req.body.id } }
        ).then(friendRequestRemoved => {
          User.updateOne(
            { _id: user._id },
            { $push: { friends: req.body.id } }
          ).then(senderAdded => {
            User.updateOne(
              { _id: req.body.id },
              { $pull: { sentRequests: req._id } }
            ).then(sentRequestRemoved => {
              User.updateOne(
                { _id: req.body.id },
                { $push: { friends: user._id } }
              ).then(friendAdded => {
                res.status(200).send(user);
              });
            });
          });
        });
      })
      .catch(err => {
        return res.status(400).send(err);
      });
  };
  
  // exports.post_cancel_friend_requests = (req, res, next) => {
  //   // console.log(req.body.id, req._id);
  //   User.findById(req._id)
  //     .exec()
  //     .then(sender => {
  //       // console.log(sender);
  //       User.updateOne(
  //         { _id: sender._id },
  //         { $pull: { sentRequests: req.body.id } }
  //       ).then(senderUpdated => {
  //         console.log("sender updated");
  //         User.updateOne(
  //           { _id: req.body.id },
  //           { $pull: { receivedRequests: sender._id } }
  //         ).then(friendUpdated => {
  //           console.log("friend updated");
  //           res.status(200).send(sender);
  //         });
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       return res.status(400).send(err);
  //     });
  // };
  // exports.post_reject_friend_requests = (req, res, next) => {
  //   // console.log(req.body.id, req._id);
  //   User.findById(req._id)
  //     .exec()
  //     .then(sender => {
  //       // console.log(sender);
  //       User.updateOne(
  //         { _id: sender._id },
  //         { $pull: { receivedRequests: req.body.id } }
  //       ).then(senderUpdated => {
  //         console.log("sender updated");
  //         User.updateOne(
  //           { _id: req.body.id },
  //           { $pull: { sentRequests: sender._id } }
  //         ).then(friendUpdated => {
  //           console.log("friend updated");
  //           res.status(200).send(sender);
  //         });
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       return res.status(400).send(err);
  //     });
  // };
  
  // exports.post_unfriend = (req, res, next) => {
  //   User.findById(req._id)
  //     .exec()
  //     .then(user => {
  //       User.updateOne(
  //         { _id: user._id },
  //         { $pull: { friends: req.body.id } }
  //       ).then(userUpdated => {
  //         User.updateOne(
  //           { _id: req.body.id },
  //           { $pull: { friends: user._id } }
  //         ).then(friendUpdated => {
  //           res.status(200).send(user);
  //         });
  //       });
  //     })
  //     .catch(err => {
  //       return res.status(400).send(err);
  //     });
  // };