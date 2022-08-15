import jwt from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';

const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });

  return token;
};

const isValidToken = ({ token }) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

const attachCookiesToResponse = ({ user, res }) => {
  const token = createJWT({ payload: user });
  const oneday = 1000 * 60 * 60 * 24;

  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneday),
    secure: process.env.NODE_ENV === 'production',
    signed: true,
  });

  res
    .status(StatusCodes.CREATED)
    .json({ msg: 'Success', user: user, token: token });
};

export { createJWT, isValidToken, attachCookiesToResponse };
