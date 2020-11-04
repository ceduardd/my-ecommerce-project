import config from '../config';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: config.NODE_ENV === 'production' ? null : err.stack,
  });
};
