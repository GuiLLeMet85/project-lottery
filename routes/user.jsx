const router = require('express').Router();
const User = require('../models/User');
const ErrorResponse = require('../utils/error');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const { isAuthenticated } = require('../middlewares/jwt');


// @desc    Get a user
// @route   GET /api/v1/users/:id
// @access  Private
router.get('/', isAthenticated, async (req, res, next) => {
    const { _id } = req.payload;
    try {
      const user = await User.findById(id);
      if (!user) {
        next(new ErrorResponse(`User not found by id: ${id}`, 404));
      }
      res.status(200).json({ data: user })
    } catch (error) {
      next(error);
    }
  });

// @desc    Edit a user
// @route   PUT /api/v1/user/:id
// @access  Private
router.put('/:id', async (req, res, next) => {
    const { id } = req.params;
    const { email, password, username, userPicture } = req.body;
    try {
      const user = await User.findById(id);
      if (!user) {
        next(new ErrorResponse(`User not found by id: ${id}`, 404));
      } else {
        const updatedUser = await User.findByIdAndUpdate(id, { email, password, username, userPicture }, { new: true });
        res.status(202).json({ data: updatedUser })
      }
    } catch (error) {
      next(error);
    }
  });

  // @desc    Delete a project
// @route   DELETE /api/v1/user/:id
// @access  Private
router.delete('/:id', isAuthenticated, async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await User.findById(id);
      if (!user) {
        next(new ErrorResponse(`Project not found by id: ${id}`, 404));
      } else {
        const deleted = await User.findByIdAndDelete(id);
        res.status(202).json({ data: deleted });
      }
    } catch (error) {
      next(error);
    }
  });
  