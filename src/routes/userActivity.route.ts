import { Router, Request, Response } from "express";
import { UserActivityController } from "../controllers/userActivity.controller";

const router = Router();
const userActivityController = new UserActivityController();

router.get("/", async (req: Request, res: Response) => {
  await userActivityController.getUserActivity(req, res);
});

export default router;
