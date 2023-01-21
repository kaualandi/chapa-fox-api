import { Schema, model } from 'mongoose';

const NewspaperSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  videoUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default model('Newspaper', NewspaperSchema);
