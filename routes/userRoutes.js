import {
  getAllUsers,
  showCurrentUser,
  updateUser,
  updateUserPassword,
  getSingleUser,
} from '../controllers/userController.js';

import express from 'express';

import {
  AuthenticationMiddleware,
  AuthorizedPermisson,
} from '../middleware/authentication.js';

const router = express.Router();

router
  .route('/getAll')
  .get(AuthenticationMiddleware, AuthorizedPermisson, getAllUsers);
router.route('/updateUser').patch(updateUser);
router.route('/updateUserPassword').patch(updateUserPassword);
router.route('/showMe').get(AuthenticationMiddleware, showCurrentUser);
router
  .route('/:id')
  .get(AuthenticationMiddleware, AuthorizedPermisson, getSingleUser);

export default router;
