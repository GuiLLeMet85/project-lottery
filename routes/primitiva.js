const express = require('express');
const router = require('express').Router();
const Primitiva = require('../models/Primitiva')
const ErrorResponse = require('../utils/error');

// @desc    Get all bets results
// @route   GET /api/v1/primitivas
// @access  Public

router.get('/', async (req, res, next) => {
    try {
      const primitivas = await Primitiva.find({});
      if (!primitivas) {
        next(new ErrorResponse('No bets found', 404));
        return;
      }
      res.status(200).json({ data: primitivas })
    } 
    catch (error) {
        next(error);
    }
  });
  
  // @desc    Get single result bet
  // @route   GET /api/v1/primitivas/:id
  // @access  Public
  router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
      const primitiva = await Primitiva.findById(id);
      console.log(primitiva)
      if (!primitiva) {
        next(new ErrorResponse(`Bet not found by id: ${id}`, 404));
        return
      }
      res.status(200).json({ data: primitiva })
    } catch (error) {
      next(error);
    }
  });

  module.exports = router;