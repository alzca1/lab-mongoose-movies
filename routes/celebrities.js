'use strict';

const express = require('express');
const Celebrity = require('../models/Celebrity.js');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();
    res.render('celebrities/index', { celebrities });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
