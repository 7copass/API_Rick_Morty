const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

const Character = mongoose.model('Cluster13', characterSchema);

module.exports = Character;
