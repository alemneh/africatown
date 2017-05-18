'use strict';
const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const userRouter     = express.Router();
const propertyRouter = express.Router();
const loginRouter    = express.Router();
const models         = require('./models');
const compression    = require('compression');
const env            = process.env.NODE_ENV || 'development';
const CONFIG         = require('./config/config.json')[env];
const port           = process.env.PORT || CONFIG.port || 3000;

require('./controllers/login-controller')(loginRouter, models);
require('./controllers/user-controller')(userRouter, models);
require('./controllers/property-controller')(propertyRouter, models);

var multer  = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg');
  }
})

var upload = multer({ storage: storage })


app.post('/files', upload.any(), function (req, res) {

  console.log(req.files);
  console.log(req.file);
  console.log(req.body);
  res.json({hit: req.files});

  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
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
