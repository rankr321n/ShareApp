const User = require("./userModel");
const notifier = require('node-notifier');
  
  exports.post_friend_request = (req, res, next) => {
    // console.log(req.body.email, req._id);

    if (req.email === req.body.email) {
      notifier.notify('You can not send Request to yourself');

            return res.status(404).send("You can not send Request to yourself")
            
          }
    User.findOne({ email:req.body.email,id:req.body.id })
      .populate("receivedRequests friends sentRequests")
      .exec()
      .then(friend => {
        alreadyFriend = false;
  
          for (af of friend.friends) {
            if (af._id == req._id) {
              alreadyFriend = true;
              notifier.notify('We Are Already Friends');
              return res.status(401).send("We Are Already Friends");
            }
          }
          if (!alreadyFriend) {
           
        
        alreadySent = false;
        for (f of friend.receivedRequests) {
          if (f.email === req.email &&f._id) {
                       alreadySent = true;
                       notifier.notify('Request Already Sent');
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
                    notifier.notify('Request Sent');
                    res.status(200).send(response);
                  })
                  .catch(err => {
                    
                    return res.status(400).send("Request Could Not Sent.");
                  });
              });
          });
        }
       } });
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