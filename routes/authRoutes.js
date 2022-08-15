import express from 'express';

const router = express.Router();

import {
  register,
  login,
  updateUser,
  logout,
} from '../controllers/authController.js';

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').post(logout);
router.route('/updateUser').patch(updateUser);

export default router;
