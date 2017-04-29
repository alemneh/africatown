'use strict';

module.exports = (mongoose, models) => {
  let Schema = mongoose.Schema;
  const seekerSchema = new mongoose.Schema({
    name: String,
    email: String,
    tel: Number,
    gender: String,
    dob: Date,
    race: String,
    profession: String,
    income: String,
    housingBudget: Number,
    houseHoldSize: Number,
    headOfHouseHold: String,
    adultsInHouseHold: Number,
    havePets: Boolean,
    profilePicUrl: String,
    zipCode: Number,
    connectionToBlkCommunity: String,
    vision: String,
    barrier: String,
    regularVistor: Boolen,
    visitingReason: String,
  });

  const Seeker = mongoose.model('Seeker', seekerSchema);
  models.Seeker = Seeker;

};
