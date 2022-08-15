import { Unauthentication } from '../error/index.js';
import { isValidToken } from '../utils/jwt.js';
import User from '../models/User.js';

const AuthenticationMiddleware = async (req, res, next) => {
  const token = req.signedCookies.token;

  if (!token) {
    console.log('No token in here');

    throw new Unauthentication('Not authentication');

    // next();
  }

  const payload = isValidToken({ token });

  const { name, email, password, userId, role } = payload;

  req.user = { name, email, password, userId, role };

  // console.log(payload);

  // console.log(`token: ${token}`);
  next();
};

const AuthorizedPermisson = async (req, res, next) => {
  const { role } = req.user;

  if (role !== 'admin') {
    throw new Unauthentication(`You are ${role}, just only admin can request`);
  }

  next();
};

export { AuthenticationMiddleware, AuthorizedPermisson };
