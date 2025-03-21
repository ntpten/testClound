import { Router, Request, Response } from "express";
import { ChoiceController } from "../controllers/choice.controller";

const router = Router();
const choiceController = new ChoiceController();

router.get("/", async (req: Request, res: Response) => {
  await choiceController.getChoice(req, res);
});

export default router;
