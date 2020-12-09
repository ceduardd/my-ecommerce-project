import jwt from 'jsonwebtoken';
import config from '../config';

const generateToken = _id => {
  return jwt.sign({ _id }, config.JWT_SECRET, {
    expiresIn: '24h',
  });
};

export default generateToken;
