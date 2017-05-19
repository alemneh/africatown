'use strict';

module.exports = (mongoose, models) => {
  let Schema = mongoose.Schema;
  const imageSchema = mongoose.Schema({
    img: { data: Buffer, contentType: String }
  },{
    timestamps: true
  });

  const Image = mongoose.model('Image', imageSchema);
  models.Image = Image;
};
