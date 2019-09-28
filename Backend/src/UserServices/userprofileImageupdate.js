const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');

const router=express.Router()
var verify=require('../auth/verify');

// const app = express();

const UserModel=require('./userModel')

// Middleware
// app.use(bodyParser.json());
// app.use(methodOverride('_method'));
// app.set('view engine', 'ejs');

// Mongo URI
const mongoURI = 'mongodb://localhost:27017/shareApp';

// Create mongo connection
const conn = mongoose.createConnection(mongoURI);

// Init gfs
let gfs;

conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

// Create storage engine
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    // console.log("fileonSTORAGE",file);
    
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });


// @route POST /upload
// @desc  Uploads file to DB
router.post('/', upload.single('file'),verify, async(req, res) => {
  
  
  await UserModel.updateOne({_id:req._id},{$set:{image:req.file.filename}}).catch(err=>{
    console.log(err);
    
  })

  res.json({ file: req.file ,msg:"Upload Success"});
  
});

router.get('/image/:filename', (req, res) => {
  
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    // console.log('File found');
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists'
      });
    }

    // Check if image
    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
      // Read output to browser
      // console.log("Inside type check");
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: 'Not an image'
      });
    }
  });
});

module.exports=router
