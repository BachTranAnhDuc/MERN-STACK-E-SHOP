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

  const { name, email, password, userId } = payload;

  req.user = { name, email, password, userId };

  // console.log(payload);

  // console.log(`token: ${token}`);
  next();
};

const AuthorizedPermisson = async (req, res, next) => {
  const { userId } = req.user;

  const findUser = await User.findOne({ _id: userId });

  if (findUser.role !== 'admin') {
    throw new Unauthentication(
      `You are ${findUser.role}, just only admin can request`
    );
  }

  next();
};

export { AuthenticationMiddleware, AuthorizedPermisson };
