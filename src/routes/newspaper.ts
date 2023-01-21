import { NewspaperController } from "../controllers/newspaper";
import { Router } from "express";

const newspaperController = new NewspaperController();

export const newspaperRouter = Router();

newspaperRouter
  .route("/")
  .get(newspaperController.findAll)
  .post(newspaperController.create);

newspaperRouter
  .route("/:id")
  .get(newspaperController.findOne)
  .put(newspaperController.update)
  .delete(newspaperController.delete);