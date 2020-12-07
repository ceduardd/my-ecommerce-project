import express from 'express';
import cors from 'cors';
import colors from 'colors';

import config from './config';

import productsRoutes from './routes/products.routes';

import { notFound, errorHandler } from './middlewares/errorMiddleware';

import './db';

colors.setTheme({
  runServer: ['yellow', 'underline', 'bold'],
});

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome, API is running...',
  });
});

app.use(cors());

// routes
app.use(productsRoutes);

// Custom errors
app.use(notFound);
app.use(errorHandler);

app.listen(
  config.PORT,
  console.log(
    `Server running in ${config.NODE_ENV} mode on port: ${config.PORT}`
      .runServer
  )
);
