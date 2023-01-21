import { Router } from "express";
import { MeController } from "../controllers/me";

const meController = new MeController();

export const meRouter = Router();

meRouter.route('/login').post(meController.login);
meRouter.route('/me/:token').get(meController.getMe);