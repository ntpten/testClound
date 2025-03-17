import { Router, Request, Response } from "express";
import { UserController } from "../controllers/user.controller";
const router = Router();
const userController = new UserController();

router.get("/users", async (req: Request, res: Response) => {
    await userController.getUsers(req, res);
});

export default router;
