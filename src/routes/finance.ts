import { Router } from "express";
import { FinanceController } from "../controllers/finance";

const financeController = new FinanceController();

export const financeRouter = Router();

financeRouter
  .route("/")
  .get(financeController.findAll)
  .post(financeController.create);

financeRouter
  .route("/:id")
  .get(financeController.findOne)
  .put(financeController.update)
  .delete(financeController.delete);