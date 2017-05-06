'use strict';
const LoginController = require('../routes/login-routes');

module.exports = (loginRouter, models) => {

  loginRouter.route('/login')
    .get((req, res) => {
      LoginController.logIn(req, res); });

};
