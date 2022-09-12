const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {isAuthenticated} = require('../middlewares/jwt')
const User = require("../models/User");
const fileUploader = require('../config/cloudinary.config');


// @desc    List all users
// @route   Get /user/usersList
// @access  Admin
router.get('/usersList', isAuthenticated, async (req,res,next)=>{
  try {
      const usersList = await User.find({});
      res.status(200).json({ data: usersList })
  } catch (error) {
      next(error)
  }
})

// @desc    List all users
// @route   Get /user/me
// @access  Private
router.get('/me', isAuthenticated, async (req,res,next)=>{
  const { _id } = req.payload;
  try {
      const user = await User.findById(_id);
      res.status(200).json({ data: user })
  } catch (error) {
      next(error)
  }
})

// @desc    Edit user from the Database
// @route   PUT /user/edit
// @access  Private
router.put('/edit', isAuthenticated, fileUploader.single('userPicture'), async (req, res, next) => {
    const userId = req.payload._id;
    const { email, password, username, userPictureFilled } = req.body
    let userPicture;
    // if there is any issue, try to replace "files" to "file"
    if (req.files) {
      userPicture = req.files.path;
    } 
    else {
      userPicture = userPictureFilled
    }
    try {
      const userDataBase = await User.findByIdAndUpdate(userId, {email, password, username, userPicture}, {new: true});
      res.status(200).json({ data: userDataBase })
    } catch (error) {
      next(error);
    }
  });

// @desc    Delete a user
// @route   DELETE /user/delete
// @access  Private

router.delete('/delete', isAuthenticated, async (req, res, next) => {
    const userId = req.payload._id;
    try {
      const deleteUser = await User.findByIdAndUpdate(userId);
        res.status(202).json({ data: deleteUser })
      }
      catch (error) {
      next(error);
    }
  });

// @desc    Upload a picture to Cloudinary
// @route   POST /api/v1/user/upload
// @access  Private
router.post("/upload", fileUploader.single("userPicture"), (req, res, next) => {
  if (!req.file) {
    next(new ErrorResponse('Error uploading the image', 500));
    return;
  }
  res.json({ fileUrl: req.file.path });
});

module.exports = router;