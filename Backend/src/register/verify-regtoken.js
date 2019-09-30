var Token=require('./register-model')

exports.RegVer=function(req,res)
    { 
   
        Token.findOne({
    registertoken: req.params.token
   
    
}, function (err, user) {
    // console.log(user);
    
    if (!user){ 
        return res.status(400).json({
        type: 'not-verified',
        msg: 'We were unable to find a valid token. Your token my have expired.'
    })}
     
    // If we found a token, find a matching user
    Token.findOne({
        _id: user._id,
        email: req.body.email
    }, function () {
        // console.log(user);
        
        if (!user) return res.json({
            msg: 'We were unable to find a user for this token.'
        });
        if (user.isVerified) return res.json({
            type: 'already-verified',
            msg: 'This user has already been verified.'
        });

        // Verify and save the user
        user.isVerified = true;
        user.save(function (err) {
            if (err) {
                 res.json({
                    msg: err.message
                });
            }
            res.json("The account has been verified. Please log in.");
        })
    })})}