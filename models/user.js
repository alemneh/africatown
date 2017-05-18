'use strict';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = function(mongoose, models) {
  let Schema = mongoose.Schema;
  const userSchema = new mongoose.Schema({
    name: String,
    organization: String,
    userType: String,
    isAdmin: { type: Boolean, default: false},
    password: String,
    title: String,
    address: String,
    telephone: Number,
    city: String,
    state: String,
    email: String,
    gender: String,
    dob: Date,
    race: String,
    profession: String,
    income: String,
    housingBudget: Number,
    houseHoldSize: Number,
    headOfHouseHold: String,
    adultsInHouseHold: Number,
    havePets: { type: Boolean, default: false},
    profilePicUrl: String,
    zipCode: Number,
    connectionToBlkCommunity: String,
    wantToLiveInCD: String,
    contribution: String,
    vision: String,
    barrier: String,
    regularVistor: { type: Boolean, default: false},
    visitingReason: String,
    text_notification: { type: Boolean, default: false},
    email_notification: { type: Boolean, default: false},
    properties: [{ type: Schema.Types.ObjectId, ref:'Property'}],
    hookEnabled: {
      type: Boolean,
      require: false,
      default: true
    }
  },{
    timestamps: true
  });
  var _this;
  userSchema.pre('save', function(next) {
    _this = this;
    if(_this.hookEnabled) {
      console.log(_this);
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
      next();
    } else {
      next();
    }
  });

  //userSchema.methods.hashPassword
  userSchema.methods.compareHash = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  userSchema.methods.generateToken = function() {
    return jwt.sign({id: this._id}, 'GAME TIME');
  };

  const User = mongoose.model('User', userSchema);
  models.User = User;

};
