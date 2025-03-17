import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {
    private userService = new UserService()

    getUsers = async (req: Request, res: Response) => {
        try {
            const users = await this.userService.getUsers();
            return res.status(200).json(users)
        } catch (error) {
            res.status(500).send("Error to Resposne")
        }
    }
}