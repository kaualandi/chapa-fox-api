import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  year: { type: Number, required: true },
  class: { type: String, required: true },
  curse: { type: String, required: true },
  period: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default model('User', UserSchema);