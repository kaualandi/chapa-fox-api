import { Router } from "express";
import { EventController } from "../controllers/event";

const eventController = new EventController();

export const eventRouter = Router();

eventRouter
  .route("/")
  .get(eventController.findAll)
  .post(eventController.create);

eventRouter
  .route("/:id")
  .get(eventController.findOne)
  .put(eventController.update)
  .delete(eventController.delete);