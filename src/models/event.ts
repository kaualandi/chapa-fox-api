import { Schema, model } from 'mongoose';

const EventSchema = new Schema({
  date: { type: String, required: true },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default model('Event', EventSchema);