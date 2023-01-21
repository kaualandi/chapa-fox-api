import { Schema, model } from 'mongoose';

const TokenSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

export default model('Token', TokenSchema);