'use strict';

const ProviderRoutes =require('../routes/provider-routes');

module.exports = (seekRouter, models) => {
  providerRouter.route('/seekers')
    .post((req, res) => {ProviderRoutes.createSeeker(req, res);})
    .get((req, res) => {ProviderRoutes.getAllSeekers(req, res);});
};
