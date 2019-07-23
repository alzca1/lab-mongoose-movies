'use strict';
const express = require('express');
// const router = express.Router();
const Celebrity = require('../../models/Celebrity');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/database-movies', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

const celebrityDb = [
  {
    name: 'Paco Martinez Soria',
    occupation: 'Actor',
    catchphrase: 'Me vuelvo al pueblo!'
  },
  {
    name: 'Gracita Morales',
    occupation: 'Actress',
    catchphrase: 'El señoritooooooo...!!!'
  },
  {
    name: 'Jose Luis López Vázquez',
    occupation: 'Actor',
    catchphrase: 'A por las suecas!!!'
  }
];

const seedDatabase = async () => {
  try {
    await Celebrity.insertMany(celebrityDb);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
};

seedDatabase();
