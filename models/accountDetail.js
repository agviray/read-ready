const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  userGoogleId: String,
  firstName: String,
  lastName: String,
  email: String,
});

module.exports = mongoose.model('Account', accountSchema);
