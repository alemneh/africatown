'use strict';

module.exports = (mongoose, models) => {
  let Schema = mongoose.Schema;
  const propertySchema = mongoose.Schema({
    _owner: [{type: Schema.Types.ObjectId, ref: 'User'}],
    address: String,
    isCatsOk: Boolean,
    isDogsOk: Boolean,
    numOfBedrms: Number,
    numOfBathrms: Number,
    smoking: Boolean,
    furnished: Boolean,
    wheelChairAccess: Boolean,
    houseType: String,
    laundry: String,
    parking: String,
    sqft: Number,
    price: String,
    description: String
  });

  const Property = mongoose.model('Property', propertySchema);
  models.Property = Property;
};
