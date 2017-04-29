'use strict';

const SeekerRoutes =require('../routes/seeker-routes');

module.exports = (seekRouter, models) => {
  seekRouter.route('/seekers')
    .post((req, res) => {SeekerRoutes.createSeeker(req, res);})
    .get((req, res) => {SeekerRoutes.getAllSeekers(req, res);});
};
