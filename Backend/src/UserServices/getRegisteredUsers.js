var user = require("./userModel");
// exports.getRegUserForuser = function(req, res) {

exports.getRegUserForuser = function(req, res, next) {
    //query with mongoose
    var query = user.find({}).select("email firstname lastname");

    query.exec(function(err, someValue) {
        if (err) return next(err);
        res.send(someValue);
    });
};