'use strict';
const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const seekerRouter   = express.Router();
const models         = require('./models');
const env            = process.env.NODE_ENV || 'development';
const CONFIG         = require('./config/config.json')[env];
const port           = process.env.PORT || CONFIG.port || 3000;

require('./controllers/seeker-controller')(seekerRouter, models);

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use('/', seekerRouter);

app.listen(port, () => {console.log('port up on ' + port);});
