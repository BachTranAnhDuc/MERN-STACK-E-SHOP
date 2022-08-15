import { StatusCodes } from 'http-status-codes';

import { BadRequest, NotFound, Unauthentication } from '../error/index.js';

const getAllUsers = async (req, res) => {
  return res.status(StatusCodes.OK).json({ msg: 'Get all users success' });
};

const showCurrentUser = async (req, res) => {
  return res.status(StatusCodes.OK).json({ msg: 'Show current user success' });
};

const updateUser = async (req, res) => {
  return res.status(StatusCodes.OK).json({ msg: 'Update user success' });
};

const updateUserPassword = async (req, res) => {
  return res
    .status(StatusCodes.OK)
    .json({ msg: 'Update password user success' });
};

const getSingleUser = async (req, res) => {
  return res.status(StatusCodes.OK).json({ msg: 'Get single user success' });
};

export {
  getAllUsers,
  showCurrentUser,
  updateUser,
  updateUserPassword,
  getSingleUser,
};
