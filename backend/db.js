import mongoose from 'mongoose';
import colors from 'colors';

import config from './config';

colors.setTheme({
  connSuccess: ['cyan', 'underline', 'bold'],
  faildConn: ['red', 'underline', 'bold'],
});

(async () => {
  try {
    const db = await mongoose.connect(config.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected to: ${db.connection.host}`.connSuccess);
  } catch (error) {
    console.error(`Error: ${error.message}`.faildConn);
    process.exit(1);
  }
})();
