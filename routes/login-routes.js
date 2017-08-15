'use strict';

const models = require('../models');
const User = models.User;

let LoginController = {

  logIn: function(req, res) {
    const authorizationArray = req.headers.authorization.split(' ');
    console.log(authorizationArray);
    const method = authorizationArray[0];
    const base64ed = authorizationArray[1];
    const authArray = new Buffer(base64ed, 'base64').toString().split(':');
    const email = authArray[0];
    const password = authArray[1];
    User.findOne({email:email}, (err, user) => {
      if(err) throw err;
      if(!user) {
        return res.status(403).json({status: 'failure', message: 'Invalid User!'});
      }
      const valid = user.compareHash(password);

      if(!valid) {
        res.status(403).json({status: 'failure', message: 'Wrong password'});
      } else {
        user.password = undefined;
        res.json({
          user,
          token: user.generateToken()
        });
      }
    });
  }

};

module.exports = LoginController;
