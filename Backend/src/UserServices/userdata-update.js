var express = require('express');
var mongoose = require('mongoose');
var gridfs = require('gridfs-stream');
var fs = require('fs');

var db_filename = "demo.jpg";
var local_file = "./logo.png";

mongoose.connect('mongodb://localhost:27017/shareApp', { useNewUrlParser: true , useUnifiedTopology: true } );
mongoose.Promise = global.Promise;
var app = express();
gridfs.mongo = mongoose.mongo;
var connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function () {

    var gfs = gridfs(connection.db);

    app.get('/', function (req, res) {
        res.send('Demo of MongoGridFs');
    });

    // Writing a file from local to MongoDB
    app.post('/write', function (req, res) {
    var tempfile    = req.files.filename.path;
    var origname    = req.files.filename.name;
        var writestream = gfs.createWriteStream({ filename: origname });
        fs.createReadStream(local_file).pipe(writestream);
        writestream.on('close', function (file) {
            res.send('File Created : ' + file.filename);
        });
    });

    // Reading a file from MongoDB
    app.get('/read', function (req, res) {
        // Check file exist on MongoDB
        gfs.exist({ filename: db_filename, root: 'users' }, function (err, file) {
            if (err || !file) {
                res.send('File Not Found');
            } else {
                var readstream = gfs.createReadStream({ filename: db_filename, root: 'users' });
                readstream.pipe(res);
            }
        });
    });

    // Delete a file from MongoDB
    app.get('/delete', function (req, res) {
        gfs.exist({ filename: db_filename, root: 'users' }, function (err, file) {
            if (err || !file) {
                res.send('File Not Found');
            } else {
                gfs.remove({ filename: db_filename, root: 'users' }, function (err) {
                    if (err) res.send(err);
                    res.send('File Deleted');
                });
            }
        });
    });

    // Get file information(File Meta Data) from MongoDB
    app.get('/meta', function (req, res) {
        gfs.exist({ filename: db_filename, root: 'users' }, function (err, file) {
            if (err || !file) {
                res.send('File Not Found');
            } else {
                gfs.files.find({ filename: db_filename, root: 'users' }).toArray(function (err, files) {
                    if (err) res.send(err);
                    res.send(files);
                });
            }
        });
    });

    app.listen(3000, () => console.log('Example app listening on port 3000!'))

});