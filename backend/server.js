import express from 'express';
import cors from 'cors';
import colors from 'colors';

import config from './config';

import productsRoutes from './routes/products.routes';
import usersRoutes from './routes/users.routes';
import ordersRoutes from './routes/orders.routes';

import { notFound, errorHandler } from './middlewares/errorMiddleware';

import './db';

// Themes color for console output
colors.setTheme({
  serverRunningColor: ['yellow', 'underline', 'bold'],
});

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome, API is running...',
  });
});

app.use(cors());

// routes
app.use(productsRoutes);
app.use(usersRoutes);
app.use(ordersRoutes);

// Custom errors
app.use(notFound);
app.use(errorHandler);

app.listen(
  config.PORT,
  console.log(
    `Server running in ${config.NODE_ENV} mode on port: ${config.PORT}`
      .serverRunningColor
  )
);
