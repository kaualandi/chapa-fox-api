import { UserController } from './../controllers/user';
import { Router } from 'express';

const userController = new UserController();

export const userRouter = Router();

userRouter
  .route('/')
  .get(userController.findAll)
  .post(userController.create);

userRouter
  .route('/:id')
  .get(userController.findOne)
  .put(userController.update)
  .delete(userController.delete);