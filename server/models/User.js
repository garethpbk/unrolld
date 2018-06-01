const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  _burritos: [{ type: ObjectId, ref: 'Burrito' }],
});

module.exports = mongoose.model('User', UserSchema);
