const express = require('express');
const router = require('express').Router();
const ResultsPrimitiva = require('../models/ResultsPrimitiva');
const ErrorResponse = require('../utils/error');


// @desc    Get all bets results
// @route   GET /api/v1/primitivaresults/
// @access  Public

router.get('/', isAuthenticated, async (req, res, next) => {
    
    try {
      const primitivaResults = await ResultsPrimitiva.find({});
      if (!primitivaResults) {
        next(new ErrorResponse('No bets found',404));
      }
      res.status(200).json({ data: primitivaResults })
    } catch (error) {
      next(error);
    }
  });
  
  // @desc    Get single result bet
  // @route   GET /api/v1/primitivaresults/:id
  // @access  Public
  router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
      const primitivaResults = await ResultsPrimitiva.findById(id);
      if (!primitivaResults) {
        next(new ErrorResponse(`Bet not found by id: ${id}`, 404));
      }
      res.status(200).json({ data: primitivaResults })
    } catch (error) {
      next(error);
    }
  });
  