import { StatusCodes } from 'http-status-codes';
import User from '../models/User.js';
import { attachCookiesToResponse, createTokenUser } from '../utils/index.js';
import { BadRequest, NotFound, Unauthentication } from '../error/index.js';

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.create({ name, email, password });

  const tokenUser = createTokenUser(user);

  attachCookiesToResponse({ user: tokenUser, res });

  // res.status(StatusCodes.CREATED).json({ msg: 'Register success', user: user });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw new Unauthentication(
      `Invalid Credential. Not found the user with email: ${email}`
    );
  }

  const isCheck = await user.comparePassword(password);

  if (!isCheck) {
    throw new Unauthentication(`Invalid Credential. Password is not correct!`);
  }

  const tokenUser = createTokenUser(user);

  attachCookiesToResponse({ user: tokenUser, res });
};

const logout = async (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now() + 5 * 1000),
  });
  res.status(StatusCodes.OK).json({ msg: 'Logout success' });
};

const updateUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'update success' });
};

export { register, login, updateUser, logout };
