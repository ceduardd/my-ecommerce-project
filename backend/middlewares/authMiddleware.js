import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import config from '../config';
import User from '../models/userModel';

export const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, config.JWT_SECRET);

      // Get user
      req.userId = decoded._id;

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

export const admin = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.userId);

  if (user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as an admin');
  }
});
