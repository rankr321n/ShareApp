var User=require('./userModel')

exports.ViewUserDetails=function(req,res){
var id=req.body.id;

var query = User.findOne(id, req.body, { "new": true }).select("username firstname lastname email twitter linkedin");


query.exec(function(err, updatedFields) {
    if (err) return next(err);
    res.send(updatedFields);
});


}