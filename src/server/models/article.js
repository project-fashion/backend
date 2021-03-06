const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  createdAt: {
    type: Date
  },
  updatedAt: {
    type: Date
  },
  name: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  imageUrl: {
    type: String
  },
  bodyPart: {
    type: String,
    required: true
  },
  outfits: [{
    type: Schema.Types.ObjectId,
    ref: 'Outfit'
  }]
});

module.exports = mongoose.model('Article', userSchema);
