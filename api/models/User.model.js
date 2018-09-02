const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: [true, 'Field name as empty']},
  createdDate: { type: Date, default: Date.now },
  type: {
    type: [{ type: String, enum: ['user', 'admin'] }],
    default: ['user']
  }
});

module.exports = mongoose.model('User', UserSchema);
