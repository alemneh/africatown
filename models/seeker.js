'use strict';

module.exports = (mongoose, models) => {
  let Schema = mongoose.Schema;
  const seekerSchema = new mongoose.Schema({

  });

  const Seeker = mongoose.model('Seeker', seekerSchema);
  models.Seeker = Seeker;

};
