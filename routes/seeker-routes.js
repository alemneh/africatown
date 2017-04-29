'use strict';
const models = require('../models');

const Seeker = models.Seeker;

let SeekerRoutes = {

  createSeeker: function(req, res) {
    const newSeeker = new Seeker(req.newSeeker);
    newSeeker.save((err, seeker) => {
      if(err) throw err;
      res.json({
        message: 'New Seeker Created!',
        seeker
      });
    });
  },

  getAllSeekers: function(re, res) {
    Seeker.find({}, (err, seekers) => {
      if(err) throw err;

      res.json({
        seekers
      });
    });
  }
};

module.exports = SeekerRoutes;
