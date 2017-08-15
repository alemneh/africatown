'use strict';
const models = require('../models');

const User = models.User;
const Property = models.Property;
const cloudinary     = require('cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

let UserRoutes = {

  signUp: function(req, res) {
    User.findOne({name: req.body.name}, (err, user) => {
      if(err) throw err;
      if(!user) {
        var newUser = new User(req.body);
        newUser.save((err, user) => {
          res.json({
            data: user,
            token: user.generateToken()
          });
        });
      } else {
        res.json({status: 'failure', message: 'Username taken!'});
      }
    });
  },

  getAllUsers: function(req, res) {
    User.find({}, (err, users) => {
      if(err) throw err;
      res.status(200).json({ users });
    });
  },

  getOneUser: function(req, res) {
    User.findOne({_id:req.params.id}, (err, user) => {
      if(err) throw err;
      res.json({data: user});
    });
  },

  updateUser: function(req, res) {
    console.log(req.body);
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, user) => {
      if(err) throw err;
      res.json({message: 'Update successful!', user });
    });
  },

  deleteUser: function(req, res) {
    let userHolder;

    User.findById(req.params.id)
        .populate('properties').exec()
        .then((user) => {

          userHolder = user;

          user.properties.forEach((prop) => {
            prop.propPhotos.forEach((photo) => {
              console.log(photo);
              cloudinary.v2.uploader.destroy(photo.public_id,
                function(error, result) { console.log(result); });
            });

            user.remove();


            return Property.findById(prop._id).remove().exec();

          });
        })
        .then((prop) => {
          userHolder.remove();
          res.json({message: 'user removed'});
        })
        .catch((err) => {
          throw err;
        });
  },

  getAllUserProperties: function(req, res) {
    User.findOne({_id: req.params.id})
      .populate('properties')
      .exec((err, user) => {
        if(err) throw err;
        res.status(200).json({properties: user.properties});
      });
  },

  getOneUserProperty: function(req, res) {
    Property.findById(req.params.propId).exec()
      .then((prop) => {
        res.json({ prop });
      })
      .catch((err) => {
        throw err;
      });
  },

  addPropertyToUser: function(req, res) {

    User.findOne({_id: req.params.id})
      .populate('properties').exec()
      .then((user) => {
        let properties = user.properties.filter((prop) => {
          return req.body.address == prop.address;
        });
        if(properties.length > 0) {
          res.json({message: 'book already exist!'});
          console.log('aborted promise');
          throw new Error('book already exist!');
        } else {
          let newProperty = new Property(req.body);
          newProperty._owner.push(user._id);
          newProperty.save();
          user.properties.push(newProperty._id);
          user.hookEnabled = false;
          user.save();
          res.json({ message: 'Property Added!', newProperty});
        }
      })
      .catch((err) => {
        if(err.message == 'Property already exist!') {
          //abort promise
        } else {
          throw err;
        }
      });
  },



  removeAProperty: function(req, res) {

    User.findById(req.params.id)
     .populate('properties').exec()
     .then((user) => {

       user.properties.forEach((prop) => {
         prop.propPhotos.forEach((photo) => {
           console.log(photo);
           cloudinary.v2.uploader.destroy(photo.public_id,
             function(error, result) { console.log(result); });
         });

         user.properties.pull(req.params.propId);
         user.save();
         return Property.findById(req.params.propId).remove().exec();

       });

     })
     .then((prop) => {
       res.json({ message: 'Property removed!', prop});
     })
     .catch((err) => {
       if(err.message == 'Property does not exist') {
         // aborted promise
       } else {
         throw err;
       }
     });

  },

};

module.exports = UserRoutes;
