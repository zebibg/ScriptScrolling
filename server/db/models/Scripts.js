const mongoose = require('mongoose');

const sciptSchema = new mongoose.Schema({
  title: String,
  text: String
});

const Script = mongoose.model('Script', sciptSchema);
module.exports = Script;