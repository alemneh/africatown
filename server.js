'use strict';
const express        = require('express');
const app            = express();
const bodyParser       = require('body-parser');
const userRouter       = express.Router();
const propertyRouter   = express.Router();
const models         = require('./models');
const compression    = require('compression');
const env            = process.env.NODE_ENV || 'development';
const CONFIG         = require('./config/config.json')[env];
const port           = process.env.PORT || CONFIG.port || 3000;

require('./controllers/user-controller')(userRouter, models);
require('./controllers/property-controller')(propertyRouter, models);

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(compression());
app.use(express.static(__dirname + '/src'));

app.use('/', userRouter, propertyRouter);


app.get('*', function (request, response){
  response.sendFile(__dirname + '/src/index.html');
});

app.listen(port, () => {console.log('port up on ' + port);});
