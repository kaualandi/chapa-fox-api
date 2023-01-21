import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const user = {
  user: process.env.MONGO_USER || '',
  pass: process.env.MONGO_PASS || '',
  dbName: process.env.MONGO_DBNAME || ''
}

mongoose.set('strictQuery', false);
export const connect = (url: string) => {
  mongoose.connect(url, user);
  const connection = mongoose.connection;
  connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
  });
  connection.on('error', (err) => {
    console.error(err);
    process.exit(1);
  });
}