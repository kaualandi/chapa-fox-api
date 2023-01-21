import { Router } from "express";
import { NewsController } from "../controllers/news";

const newsController = new NewsController();

export const newsRouter = Router();

newsRouter
  .route("/")
  .get(newsController.findAll)
  .post(newsController.create);

newsRouter
  .route("/:id")
  .get(newsController.findOne)
  .put(newsController.update)
  .delete(newsController.delete);

export default newsRouter;