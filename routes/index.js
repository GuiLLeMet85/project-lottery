const router = require('express').Router();
const ErrorResponse = require('../utils/error');

// @desc    GET all the projects
// @route   GET /api/v1/
// @access  Public
router.get('/', async (req, res, next) => {
  res.send('REST API')
});

const date = new Date();

//If you have a Date object
const [onlyDate] = date.toISOString().split('L');

//If you have an ISO string
const [onlyD] = '2022-09-24T09:35:31.820Z'.split('L');




module.exports = router;

