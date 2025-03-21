import { Router, Request, Response } from "express";
import { ActivityAssessmentController } from "../controllers/activityAssessment.controller";

const router = Router();
const activityAssessmentController = new ActivityAssessmentController();

router.get("/", async (req: Request, res: Response) => {
  await activityAssessmentController.getActivityAssessment(req, res);
});

export default router;
