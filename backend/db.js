import mongoose from 'mongoose';
import colors from 'colors';

import config from './config';

// Themes color for console output
colors.setTheme({
  connSuccessColor: ['cyan', 'underline', 'bold'],
  connFailedColor: ['red', 'underline', 'bold'],
});

(async () => {
  try {
    const db = await mongoose.connect(config.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected to: ${db.connection.host}`.connSuccessColor);
  } catch (error) {
    console.error(`Error: ${error.message}`.connFailedColor);
    process.exit(1);
  }
})();
