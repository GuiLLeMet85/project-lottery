const express = require('express');
const router = require('express').Router();
const BetUser = require('../models/BetUser');
const ErrorResponse = require('../utils/error');
const { isAuthenticated } = require('../middlewares/jwt');

// @desc    Get all user bets
// @route   GET /api/v1/userId/
// @access  Private

router.get('/:userId', isAuthenticated, async (req, res, next) => {
  try {
    const betUser = await BetUser.find({});
    if (!betUser) {
      next(new ErrorResponse('No bets for user found', 404));
    }
    res.status(200).json({ data: betUser })
  } catch (error) {
    next(error);
  }
});

// @desc    Get single user bet
// @route   GET /api/v1/userId/:id
// @access  Private
router.get('/:userId/:id', isAuthenticated, async (req, res, next) => {
  const { id } = req.params;
  try {
    const betUser = await BetUser.findById(id);
    if (!betUser) {
      next(new ErrorResponse(`Bet not found by id: ${id}`, 404));
    }
    res.status(200).json({ data: betUser })
  } catch (error) {
    next(error);
  }
});

// @desc    Create a user bet
// @route   POST /api/v1/userId
// @access  Private
router.post('/:userId/', isAuthenticated, async (req, res, next) => {
  const { dateLottery, numbers, numComplem, numReint, euroBet, isPrized } = req.body;
  try {
    const betUser = await BetUser.create(dateLottery, numbers, numComplem, numReint, euroBet, isPrized);
    if (!betUser) {
      next(new ErrorResponse('An error ocurred while creating the bet user', 500));
    }
    res.status(200).json({ data: betUser })
  } catch (error) {
    next(error);
  }
});


// @desc    Edit a user bet
// @route   PUT /api/v1/userId/:id
// @access  Private
router.get('/userId/:id', isAuthenticated, async (req, res, next) => {
  router.put('/userId/:id',isAuthenticated, async (req, res, next) => {
  const { id } = req.params;
  const { dateLottery, numbers, numComplem, numReint, euroBet, isPrized } = req.body;
  try {
    const betUser = await BetUser.findById(id);
    if (!betUser) {
      next(new ErrorResponse(`Project not found by id: ${id}`, 404));
    } else {
      const updatedUserBet = await BetUser.findByIdAndUpdate(id, { dateLottery, numbers, numComplem, numReint, euroBet, isPrized }, { new: true });
      res.status(202).json({ data: updatedUserBet })
    }
  } catch (error) {
    next(error);
  }
});

// @desc    Delete a user bet
// @route   DELETE /api/v1/userId/:id
// @access  Private
router.delete('/userId/:id', isAuthenticated, async (req, res, next) => {
  const { id } = req.params;
  try {
    const betUser = await BetUser.findById(id);
    if (!betUser) {
      next(new ErrorResponse(`Project not found by id: ${id}`, 404));
    } else {
      const deleted = await BetUser.findByIdAndDelete(id);
      res.status(202).json({ data: deleted });
    }
  } catch (error) {
    next(error);
  }
});



module.exports = router;