import { Schema, model } from 'mongoose';

const NewsSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default model('News', NewsSchema);