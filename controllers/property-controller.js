'use strict';

const PropertyRoutes =require('../routes/property-routes');

module.exports = (propertyRouter, models) => {
  propertyRouter.route('/properties')
    .post((req, res) => {PropertyRoutes.createProperty(req, res);})
    .get((req, res) => {PropertyRoutes.getAllProperties(req, res);});

  propertyRouter.route('/properties/:id')
    .get((req, res) => {PropertyRoutes.getOneProperty(req, res);})
    .put((req, res) => {PropertyRoutes.updateProperty(req, res);})
};
