const router = require('express').Router();
const BetUser = require('../models/BetUser');
const ErrorResponse = require('../utils/error');
const { isAuthenticated } = require('../middlewares/jwt');

// @desc    Get all user bets
// @route   GET /api/v1/betUser/
// @access  Private
router.get('/', async (req, res, next) => {
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

router.post('/', async (req, res, next) => {
    const { userId, dateLottery, numbers, numComplem, numReint, euroBet, isPrized } = req.body;
    try {
      const newBet = await BetUser.create(req.body);
      if (!newBet) {
        next(new ErrorResponse('No bets for user found', 404));
      }
      res.status(200).json({ data: newBet })
    } catch (error) {
      next(error);
    }
  });

  module.exports = router;