'use strict';
const express        = require('express');
const app            = express();
const fs             = require('fs');
const bodyParser     = require('body-parser');
const userRouter     = express.Router();
const propertyRouter = express.Router();
const loginRouter    = express.Router();
const models         = require('./models');
const compression    = require('compression');
const env            = process.env.NODE_ENV || 'development';
const CONFIG         = require('./config/config.json')[env];
const port           = process.env.PORT || CONFIG.port || 3000;
const cloudinary     = require('cloudinary');
// const cloudinaryCreds = require('./env/cloudinaryCreds.json');
// cloudinary.config({
//   cloud_name: cloudinaryCreds.CLOUDINARY_NAME,
//   api_key: cloudinaryCreds.API_KEY,
//   api_secret: cloudinaryCreds.API_SECRET,
// });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
require('./controllers/login-controller')(loginRouter, models);
require('./controllers/user-controller')(userRouter, models);
require('./controllers/property-controller')(propertyRouter, models);

var multer  = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log('destination');
    cb(null, __dirname + '/uploads');
  },
  filename: function (req, file, cb) {
    console.log('filename');
    console.log(file);
    cb(null, file.fieldname + '-' + Date.now() + '.jpg');
  }
});

var upload = multer({ storage: storage });
var Image = models.Image;

app.post('/files', upload.single('file'), function (req, res) {
  console.log(req.headers);
  console.log(req.file);
  console.log(req.file.userId);
  console.log('files');
  var file = req.file;
  cloudinary.uploader.upload(file.path, function(results) {
    fs.unlink(file.path, function() {
      console.log(results.url);
      res.json({results});
    });
  });
  cloudinary.v2.uploader.destroy('sedx3jqafrkhn1c3vtuu',
    function(error, result) { console.log(result); });
});

app.get('/files', function(req, res) {
  Image.find({}, function(err, files) {
    if(err) throw err;
    res.contentType = files[0].img.contentType;
    res.send();
  });
});

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(compression());
app.use(express.static(__dirname + '/src'));

app.use('/', userRouter, propertyRouter, loginRouter);


app.get('*', function (request, response){
  response.sendFile(__dirname + '/src/index.html');
});

app.listen(port, () => {console.log('port up on ' + port);});
