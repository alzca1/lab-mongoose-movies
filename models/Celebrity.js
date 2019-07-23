'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  occupation: {
    type: String,
    enum: ['Actor', 'Actress', 'Singer', 'Comedian', 'Unknown']
  },
  catchphrase: {
    type: Array
  }

});

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;
