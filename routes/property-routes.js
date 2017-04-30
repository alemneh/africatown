'use strict';
const models = require('../models');

const Property = models.Property;

let PropertyRoutes = {

  getAllProperties: function(req, res) {
    Property.find({}, (err, properties) => {
      if(err) throw err;

      res.json({
        properties
      });
    });
  },

  getOneProperty: function(req, res) {
    Property.findById(req.params.id, (err, property) => {
      if(err) throw err;

      res.json({
        property
      });
    });
  },

  updateProperty: function(req, res) {
    console.log(req.body);
    Property.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, property) => {
      if(err) throw err;
      res.json({message: 'Update successful!', property });
    });
  },
};

module.exports = PropertyRoutes;
