import dotenv from 'dotenv';

dotenv.config();

export default {
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost/bestsellershop',
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  JWT_SECRET: process.env.JWT_SECRET || 'JWT_SECRET',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
};
