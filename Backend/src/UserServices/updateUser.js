var User=require('./userModel')

exports.UpdateUserDetails= function (req,res){
var id=req.body.id;
var query = User.findOneAndUpdate({_id: id},{$set :req.body.data}, { "new": true, upsert: true })


query.exec(function(err, updatedFields) {
    if (err) return next(err);
    else{
        
        res.status(200).json("User profile updated")
   }
});
}

exports.ViewUserDetails=function(req,res){
    var id=req._id;
    
    var query = User.findById(id,{firstname:1,lastname:1,username:1,twitter:1,linkedin:1,email:1,_id:0})
    query.exec(function(err, data) {
        if (err) return next(err);
        else{
            res.status(200).json(data)
       }
    });
    }
    


