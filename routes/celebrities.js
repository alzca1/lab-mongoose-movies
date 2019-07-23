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

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const celebrity = await Celebrity.findById(id);
    res.render('celebrities/celebrityDetails', celebrity);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
