'use strict';

const UserRoutes =require('../routes/user-routes');

module.exports = (userRouter, models) => {
  userRouter.route('/users')
    .post((req, res) => {UserRoutes.signUp(req, res);})
    .get((req, res) => {UserRoutes.getAllUsers(req, res);});

  userRouter.route('/users/:id')
    .get((req, res) => {UserRoutes.getOneUser(req, res);})
    .put((req, res) => {UserRoutes.updateUser(req, res);})
    .delete((req, res) => {UserRoutes.deleteUser(req, res);});

  userRouter.route('/users/:id/properties')
    .get((req, res) => {UserRoutes.getAllUserProperties(req, res);})
    .post((req, res) => {UserRoutes.addPropertyToUser(req, res);});

  userRouter.route('/users/:id/properties/:propId')
    .delete((req, res) => {UserRoutes.removeAProperty(req, res);});
};
