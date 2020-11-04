import express from 'express';
import passport from 'passport';
import UserController from './controller';
import UserService from '../../services/user';
import db from '../../models';

const { User: UserModel } = db.sequelize.models;

const router = express.Router();
const userController = UserController(UserService({ UserModel }));

router.get(
  '/me',
  passport.authenticate('jwt', { session: false }),
  userController.readMe,
);
router.get('/', userController.readList);

export default router;
