import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import colors from 'colors';

import config from './config';

import productsRoutes from './routes/products.routes';
import usersRoutes from './routes/users.routes';
import ordersRoutes from './routes/orders.routes';
import uploadRoutes from './routes/upload.routes';

import { notFound, errorHandler } from './middlewares/errorMiddleware';

import './db';

// Themes color for console output
colors.setTheme({
  serverRunningColor: ['yellow', 'underline', 'bold'],
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Show request
if (config.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// CORS configure
app.use(cors());

// Routes
app.use('/api/products', productsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/upload', uploadRoutes);
app.get('/api/config/paypal', (req, res) => res.send(config.PAYPAL_CLIENT_ID));

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

if (config.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

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
