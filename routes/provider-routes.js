'use strict';
const models = require('../models');

const Provider = models.Provider;

let ProviderRoutes = {

  createProvider: function(req, res) {
    const newProvider = new Provider(req.body);
    newProvider.save((err, provider) => {
      if(err) throw err;
      res.json({
        message: 'New Provider Created!',
        provider
      });
    });
  },

  getAllProviders: function(re, res) {
    Provider.find({}, (err, providers) => {
      if(err) throw err;

      res.json({
        providers
      });
    });
  }
};

module.exports = ProviderRoutes;
