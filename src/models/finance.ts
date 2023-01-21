import { Schema, model } from 'mongoose';

const FinanceSchema = new Schema({
  type: { type: String, required: true },
  description: { type: String, required: true },
  value: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default model('Finance', FinanceSchema);