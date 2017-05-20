'use strict';

module.exports = (mongoose, models) => {
  let Schema = mongoose.Schema;
  const propertySchema = mongoose.Schema({
    _owner: [{type: Schema.Types.ObjectId, ref: 'User'}],
    propPicUrl: String,
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
    price: Number,
    description: String,
    telephone: Number,
    manager: String,
    city: String,
    state: String,
    zipCode: Number,
    propPhotos: []
  },{
    timestamps: true
  });

  const Property = mongoose.model('Property', propertySchema);
  models.Property = Property;
};
